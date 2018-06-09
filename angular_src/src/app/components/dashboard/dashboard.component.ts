import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'
import { DataService } from '../../services//data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  lng: number = 16.946632;
  lat: number = 52.445027;

  data = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .map(res => { this.data = res["features"] })
      .subscribe(res => {
        console.log(this.data);
      })

  }
}
