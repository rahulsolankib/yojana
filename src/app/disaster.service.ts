import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class DisasterService {
  data:any;
  constructor(private http:HttpClient) { }
  getEarthquake(){
    this.http.get('http://localhost:4201/disaster/earthquake').subscribe(res=>{
       console.log(res);       
       this.data=res;
   });
  }
  geto(){
    return this.data;
  }


}
