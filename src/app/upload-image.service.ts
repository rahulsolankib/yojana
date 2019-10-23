import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http:HttpClient) { }
  uploadImage(image)
  {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'image/png' });
    let options = { headers: headers };
      this.http.post('http://localhost:4201/uploads',{"product":image},options).subscribe((res)=>{
          //console.log(res);
      })
  }
}
