import { Component, OnInit,Input } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponent implements OnInit {
  @Input() public login;
  constructor(public person:LoginserviceService,public router:Router) { 
    super(person,router);
    this.person.status=true;
    this.login=false;
    console.log("here it is : " + this.person.status+ "HERE WE GO "+this.login );
  }
  ngOnInit() {
    this.login=false;
  }


}
