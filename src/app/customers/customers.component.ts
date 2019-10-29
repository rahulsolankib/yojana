import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import {NgForm} from '@angular/forms'
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore } from '@angular/fire/firestore';
import { JsonPipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 
  constructor(private service:CustomerService,private firestore:AngularFirestore) { }
  ngOnInit() {
    this.resetForm();
  }
  onsubmit(form:NgForm)
  {
    let data= Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
      this.firestore.collection('customers').doc(form.value.fullName).set(data);
    else
      this.firestore.doc('customers/'+form.value.id).update(data);
    this.resetForm(form);
    //this.toastr.success('Submitted Successfully')
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      fullName:'',
      mobile:'',
      address:''
    }
  }
}
