import { Component, OnInit, Input } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponent implements OnInit {
  @Input() public login;
  public name = '';
  public phno = '';
  public pid = '';

  constructor(public person: LoginserviceService, public router: Router) {
    super(person, router);
    this.person.status = true;
    this.login = false;
    console.log('here it is : ' + this.person.status + 'HERE WE GO ' + this.login );
  }
  ngOnInit() {
    if(this.person.name === '') {
      this.router.navigate(['./login']);
    }

    this.login = false;
  }
  getAllDetails() {
    this.name = this.person.getNewName();
    this.pid = this.person.getpid();
    this.phno = this.person.getphno();
    console.log(this.name);
  }

}
