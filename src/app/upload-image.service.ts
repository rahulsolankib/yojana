import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }
  uploadImage(image) {


      const fd = new FormData();
      fd.append('product', image);
      this.http.post('http://localhost:4201/uploads', fd).subscribe((res) => {
          console.log(res);
      });
  }
}
