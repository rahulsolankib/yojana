import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { sanitizeIdentifier } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public name="";
  public pid="";
  public username="";
  public email="";
  public phno="";
  public status=false;
  constructor(private http:HttpClient) { }
  getStudent(){
     this.http.get('http://localhost:4201/new').subscribe(res=>{
        console.log(res);       
        return  res;
    });
  }
  async getPerson(username,password)
  {
     this.http.post('http://localhost:4201/person',{"username":username,"password":password}).subscribe(res=>{
      if(res[0]){
        this.name=res[0].person_name;
        this.phno=res[0].phno;
        this.email=res[0].email;
        this.pid=res[0].pid;
        this.username=res[0].username;
        this.status=true;
        
        return true;
      }
    });
    return false;
  }
  getStatus()
  {
    return this.status;
  }
  getNewName()
  {
    return this.name;
  }
  getEmail()
  {
    return this.email;
  }
  getpid()
  {
    return this.pid;
  }
  getUsername()
  {
    return this.username;
  }
  getphno()
  {
    return this.phno;
  }
}
