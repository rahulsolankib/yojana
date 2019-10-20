import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  e:any;
  constructor(private emp:LoginserviceService) { }

  ngOnInit() {
  }
  getEmp()
  {
    this.e=this.emp.getStudent();
  }

}
