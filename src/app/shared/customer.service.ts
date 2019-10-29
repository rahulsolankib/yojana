import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { AngularFirestore } from '@angular/fire/firestore';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData:Customer;
  constructor(private firestore:AngularFirestore) { }
  getCustomers()
  {
    return this.firestore.collection('customers').snapshotChanges()
  }
  getCustomer(id)
  {
    return this.firestore.doc('customers/'+id)
  }
}
