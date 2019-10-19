import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yojana';
  login=false;
  student:any;
  
  constructor(private http:HttpClient){}
  signOut($event){
    console.log($event)
    this.login=true;
  }
  getStudent(){
    this.student = this.http.get('http://localhost:4201/new').subscribe(res=>{
        this.student = res;
        console.log(res);
    });
  }
  
}


