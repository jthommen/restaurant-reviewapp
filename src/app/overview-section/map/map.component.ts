import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-section',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 40.722216;
  lng: number = -73.987501;
  zoom: number = 12;

  constructor() { }

  ngOnInit() {
  }

}
