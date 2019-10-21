import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoginserviceService} from './loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yojana';
  login=true;
  student:any;
  
  constructor(public user:LoginserviceService,public router:Router){
  }
  signOut($event){
    console.log($event)
    this.login=true;
    this.user.status=false;
    this.router.navigate(['/login']);
  }
  getStudent(){
    this.student = this.user.getStudent();
  }
  
}


