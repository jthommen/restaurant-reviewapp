import { restaurantData } from "../data/restaurants";
import * as _ from 'lodash';

export function fetchRestaurants() {
    return <any>_.values(restaurantData);
}