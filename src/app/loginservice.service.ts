import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { sanitizeIdentifier } from '@angular/compiler';
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
  getPerson(username,password)
  {
    console.log(password);
        return this.http.post('http://localhost:4201/person',{"username":username,"password":password}).subscribe(res=>{
      console.log(res);
    });
  }
  
}
