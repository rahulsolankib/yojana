import { Component, OnInit } from '@angular/core';
import {DisasterService} from '../disaster.service';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})

export class DisasterComponent implements OnInit {
  earth:any;
  new:any;
  result=[];
  image_url="http://www.imd.gov.in/section/hydro/img/week-rain.jpg";
  columnsToDisplay=['edate','etime','lati','longi','edepth','mag','region']
  constructor(private disaster:DisasterService,private http:HttpClient) { }
  username="asd_solanki"
  password="GPfISFwi7m35o"
  ngOnInit() {
    this.disaster.getEarthquake();
    // var headers_object = new HttpHeaders();
    // headers_object.append('Content-Type', 'application/json');
    // headers_object.append("Authorization", "BasicAuth " + btoa("this.username:this.password"));
    // console.log(headers_object)
    // const httpOptions = {
    //   headers: headers_object
    // };
   // console.log(this.earth)
  }
  getEarthquake($event)
  {
    //console.log($event)
    this.earth=this.disaster.geto()
    this.result = Object.keys(this.earth)
    //console.log(this.result)
    
  }
 
  applyFilter(filterValue: string) {
    var tar=filterValue.trim().toLowerCase();
    var res;
    for(var i of this.earth)
    {
      var timepass = i.edate+i.etime+i.region;
      if(timepass.includes(tar))
      {
        console.log(i.edepth)
        res=i;
      }
      // if(i.edepth===tar)
      // {
      //   res+=i;
      //   console.log(i.edate)
      // }
      //     if(i.mag===tar)
      //   res+=i;
      // if(i.lati===tar)
      //   res+=i;
      // if(i.longi===tar)
      //   res+=i;
    }
    this.earth=res;
    console.log(this.earth)
    //console.log(this.earth)
  }
  
  
}
