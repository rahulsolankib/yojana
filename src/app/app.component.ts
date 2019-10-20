import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoginserviceService} from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yojana';
  login=false;
  student:any;
  
  constructor(private user:LoginserviceService){}
  signOut($event){
    console.log($event)
    this.login=true;
  }
  getStudent(){
    this.student = this.user.getStudent();
  }
  
}


