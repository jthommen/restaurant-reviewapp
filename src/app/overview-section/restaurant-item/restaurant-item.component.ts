import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input()
  restaurant;

  constructor() { }

  ngOnInit() {
  }

}
