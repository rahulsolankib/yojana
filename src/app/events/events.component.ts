import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  displayedColumns: string[] = ['kvk_names', 'future','details'];
  dataSource;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:4201/events').subscribe(res => {
        this.dataSource = res;
      });
  }
  getEvents() {
    this.http.get('http://localhost:4201/events').subscribe(res => {
        this.dataSource = res;
      });
  }

}
