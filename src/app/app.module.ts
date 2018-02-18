import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// Custom Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverviewSectionComponent } from './overview-section/overview-section.component';
import { MapComponent } from './overview-section/map/map.component';
import { FilterSectionComponent } from './overview-section/filter-section/filter-section.component';
import { RestaurantListComponent } from './overview-section/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './overview-section/restaurant-item/restaurant-item.component';
import { DetailSectionComponent } from './detail-section/detail-section.component';
import { RestaurantDetailComponent } from './detail-section/restaurant-detail/restaurant-detail.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewSectionComponent,
    DetailSectionComponent,
    MapComponent,
    FilterSectionComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAY6KNYUj8C4vNV8acp8pIw0FX4-HyDBn4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
