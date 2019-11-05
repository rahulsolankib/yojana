import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  list: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getEvents() {
    this.http.get('http://localhost:4201/events').subscribe(res => {
        this.list = res;
      });
  }

}
