import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';

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
import { RestaurantService } from './services/restaurant.service';

// NgRx Imports
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './store/application-state';
import { dataState } from './store/reducers/DataStateReducer';
import { uiState } from './store/reducers/UiStateReducer';
import { LoadRestaurantDataEffectService } from './store/effects/load-restaurant-data-effect.service';

// Combined reducer for application state
export const reducers: ActionReducerMap<ApplicationState> = {
  dataState,
  uiState
};


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
    HttpClientModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_APPLICATION_STATE}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([
      LoadRestaurantDataEffectService
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAY6KNYUj8C4vNV8acp8pIw0FX4-HyDBn4'
    })
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
