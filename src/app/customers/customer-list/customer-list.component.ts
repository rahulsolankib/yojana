import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import {Customer} from 'src/app/shared/customer'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  list:Customer[]
  items:Customer[]
  constructor(private service:CustomerService,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(res=>{
        this.list = res.map(item=>{
          return {id:item.payload.doc.id,
            ...item.payload.doc.data()} as Customer
        })
    })
    this.service.getCustomer('ebxH2GuJUF311LslNS35')
  }
  onEdit(cust:Customer)
  {
    this.service.formData=Object.assign({},cust);
  }
  onDelete(id:string)
  {
    if(confirm("Are you sure to delete this record?"))
    {
      this.firestore.doc('customers/'+id).delete();
    }
  }
}
