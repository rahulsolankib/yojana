import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  person:any;
  username:string;
  password:string;
  constructor(private Person:LoginserviceService) { }

  ngOnInit() {
  }
  loginCheck()
  {
    this.person = this.Person.getPerson(this.username,this.password);
  }
  

}
