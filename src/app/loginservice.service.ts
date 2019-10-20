import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  getEmp(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Rahul","age":34},
      {"id":3,"name":"RO","age":32}
    ]
  }
}
