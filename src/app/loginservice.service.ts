import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  getStudent(){
     this.http.get('http://localhost:4201/new').subscribe(res=>{
        console.log(res);       
        return  res;
    });
  }
}
