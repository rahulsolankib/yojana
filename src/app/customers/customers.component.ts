import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor(private service: CustomerService , private firestore: AngularFirestore) { }
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
      this.firestore.collection('customers').doc(form.value.fullName).set(data);
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
