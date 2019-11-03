import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Scheme} from 'src/app/shared/schemes/scheme';
@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss']
})
export class SchemesComponent implements OnInit {
  sch:Scheme[];
  formData:Scheme;
  constructor(private firestore:AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('schemes').snapshotChanges().subscribe(res=>{
      this.sch= res.map(item=>{
        return {id:item.payload.doc.id,
          ...item.payload.doc.data()} as Scheme
      })
  })
  }
  onDelete(l:Scheme)
  {
    this.firestore.doc('schemes/'+l.id).delete();
  }

}
