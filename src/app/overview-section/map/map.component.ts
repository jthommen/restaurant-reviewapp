import { Component } from '@angular/core';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../../../shared/model/restaurant';
import { stateToFilterResultMarkerSelector } from './stateToFilterResultMarkerSelector';

@Component({
  selector: 'map-section',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{

  lat: number = 40.722216;
  lng: number = -73.987501;
  zoom: number = 12;

  markerCoordinates$: Observable<Restaurant["latlng"][]>;

  constructor(private store: Store<ApplicationState>) { 

    this.markerCoordinates$ = store.select(stateToFilterResultMarkerSelector);
  }

  onMarkerClick() {
    console.log('Marker clicked');
  }


}
