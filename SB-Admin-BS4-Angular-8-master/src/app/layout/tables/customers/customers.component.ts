import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer} from 'src/app/shared/customer/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  cust:Customer[];
  constructor(private firestore : AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('customers').snapshotChanges().subscribe(res=>{
      this.cust= res.map(item=>{
        return {id:item.payload.doc.id,
          ...item.payload.doc.data()} as Customer
      })
  })
  }
  
}
