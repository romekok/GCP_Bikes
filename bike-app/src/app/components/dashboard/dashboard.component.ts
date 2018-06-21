import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from '../../services//data.service';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  lng: number = 16.946632;
  lat: number = 52.445027;

  location;
  total_bikes;
  free_bikes;

  data = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().pipe(
      map(res => { this.data = res["features"] })
    ).subscribe(res => {
        console.log(this.data);
      })

  }
  markerClicked(location, total_bikes, free_bikes, index){
    this.location=location;
    this.total_bikes=total_bikes;
    this.free_bikes=free_bikes;
    
  }
}
