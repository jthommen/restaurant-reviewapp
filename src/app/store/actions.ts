import { Action } from "@ngrx/store";
import { Restaurant } from "../../shared/model/restaurant";

export const LOAD_RESTAURANT_DATA_ACTION = 'LOAD_RESTAURANT_DATA_ACTION';
export const RESTAURANT_DATA_LOADED_ACTION = 'RESTAURANT_DATA_LOADED_ACTION';

export class LoadRestaurantDataAction implements Action {
    readonly type = LOAD_RESTAURANT_DATA_ACTION;

    constructor(){}
}

export class RestaurantDataLoadedAction implements Action {
    readonly type = RESTAURANT_DATA_LOADED_ACTION;

    constructor(public payload: Array<Restaurant>){}
}