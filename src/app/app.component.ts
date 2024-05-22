import { NoteComponent } from './note/note.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';
import { HomeComponent } from './home/home.component';
//import { NoteComponent } from './note/note.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NoteComponent,HomeComponent,AboutComponent,ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02AngularApp';

  constructor(){
    console.log('hello from constructor:');
  }
  clickEvent(){
    console.log('hello from clickEvent method');
    alert("hello from clickEvent method");
  }
  // ngOnInit(){
  //   console.log('hello from ngOnInit:');
  // }
}
