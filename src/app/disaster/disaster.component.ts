import { Component, OnInit } from '@angular/core';
import {DisasterService} from '../disaster.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})

export class DisasterComponent implements OnInit {
  earth:any;
  new:any;
  result=[];

  columnsToDisplay=['edate','etime','lati','longi','edepth','mag','region']
  constructor(private disaster:DisasterService) { }

  ngOnInit() {
    this.disaster.getEarthquake();
  }
  getEarthquake()
  {
    this.earth=this.disaster.geto()
    this.result = Object.keys(this.earth)
  }
  dataSource = new MatTableDataSource(this.earth);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
