import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http:HttpClient) { }
  uploadImage(image)
  {
     
      
      const fd=new FormData();
      fd.append('product',image)
      this.http.post('http://localhost:4201/uploads',fd).subscribe((res)=>{
          console.log(res);
      })
  }
}
