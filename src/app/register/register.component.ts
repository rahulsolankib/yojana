import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { CustomerService } from '../shared/customer.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private person: LoginserviceService, private service: CustomerService, private firestore: AngularFirestore ) { }

  ngOnInit() {
    this.resetForm();
  }
    onsubmit(form: NgForm) {
      const data = Object.assign({}, form.value);
      delete data.id;
      if (form.value.id == null) {
        if (!form.value.fullName) {
          alert('Please enter details');
          return;
        }
        // tslint:disable-next-line:no-trailing-whitespace
        // tslint:disable-next-line:variable-name
        const person_name = form.value.fullName;
        const username = form.value.username;
        const person_password = form.value.person_password;
        console.log(person_password);
        const email = form.value.email;
        const phno = form.value.mobile;
        this.http.post('http://localhost:4201/register', {person_name, username, person_password, email, phno}).subscribe(res => {
          console.log(res);
        });

        this.firestore.collection('customers').doc(form.value.fullName).set(data);
        
        //this.router.navigate(['./login']);

      } else {
        this.firestore.doc('customers/' + form.value.id).update(data);
      }
      this.resetForm(form);
    }
    resetForm(form?: NgForm) {
      if (form != null) {
        form.resetForm();
      }
      this.service.formData = {
        fullName: '',
        mobile: '',
        address: ''
      };
    }
}
