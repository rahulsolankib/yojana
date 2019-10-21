import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

import {Router} from "@angular/router"
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponent implements OnInit {
  public person:any;
  public name="";
  username:string;
  password:string;
  hello:"asdsadsad";
  constructor(public Person:LoginserviceService,public router:Router) {
    super(Person,router);
    this.login=true;
    this.Person.status=false;
  }

  ngOnInit() {
    
  }

   loginCheck()
  {
    this.person = this.Person.getPerson(this.username, this.password);
    console.log("but here it is :"+this.Person.getStatus())
    if(this.Person.getStatus())
    {
      this.Person.status=false;
      this.router.navigate(['/home']);
    }
  }
  getName()
  {
    this.name=this.Person.getNewName();
  }
  
  
  

}
