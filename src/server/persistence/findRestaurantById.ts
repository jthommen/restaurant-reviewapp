import { restaurantData } from '../data/restaurants';
import { Restaurant } from '../../shared/model/restaurant';
import * as _ from 'lodash';

export function findRestaurantById(restaurantId:number) {
    const restaurants: Restaurant[] = <any>_.values(restaurantData);

    return _.find(restaurants, restaurant => restaurant.id === restaurantId);
}