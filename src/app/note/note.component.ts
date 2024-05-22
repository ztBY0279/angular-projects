import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  title: string;
  views: number;
  like: string;
}

//const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatTableModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  HttpClient = inject(HttpClient);
  displayedColumns: string[] = ['id', 'title', 'views', 'like'];
  dataSource:any[] = []
  data: any[] = [];

  // constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.HttpClient.get<any[]>('http://localhost:3000/posts').
    forEach(element => {
      console.log('the value of element is ',element);
      
      this.data = element;
      this.dataSource = element;
      
    })
    .catch((error) =>{
      console.log('there is an error', error);
      
    })
    //.subscribe(
    //   (response) => {
    //     this.data = response;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
}

}



// import { CommonModule } from '@angular/common';
// import { Component,ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-note',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './note.component.html',
//   styleUrl: './note.component.css'
// })
// export class NoteComponent {
//   data:any;
//    constructor(private cdr: ChangeDetectorRef){
//         this.fetchData();
//    }
//    async fetchData() {
//     try {
//       const response = await fetch('http://localhost:3000/posts');
//       if (!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       this.data = await response.json();
//       console.log('API response:', this.data);
//     } catch (error) {
//       console.error('API error:', error);
//     }
//   }
