import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string;
  mob: string;
  add: string;
  aadhar: string;
  policy: string;

  constructor(private router: Router, private http: HttpClient, private person: LoginserviceService) { }

  ngOnInit() {
  }
  onSubmit() {
      const name = this.name;
      const mob = this.mob;
      const add = this.add;
      const aadhar = this.name;
      const policy = this.policy;
      const pid = this.person.getpid();
      this.http.post('http://localhost:4201/person/form', {pid, name, mob, add, aadhar , policy}).subscribe(res => {
        console.log(res);
     });
  }
}
