import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name=""
  constructor(private person:LoginserviceService) { }

  ngOnInit() {
  }
  setName()
  {
    this.name=this.person.getEmail();
  }
}
