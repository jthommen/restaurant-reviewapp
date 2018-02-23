import { ApplicationState } from "../../store/application-state";
import { Restaurant } from "../../../shared/model/restaurant";
import * as _ from 'lodash';

export function stateToFilterResultMarkerSelector(state: ApplicationState) {

    let results: Restaurant["latlng"][] = [];
    const cuisineFilter = state.uiState.filterCuisines;
    const neighborhoodFilter = state.uiState.filterNeighborhoods;

    if(cuisineFilter === 'All' && neighborhoodFilter === 'All'){

        _.map(state.dataState.restaurants, function(restaurant) {
            results.push(restaurant.latlng)
        });

    } else {

        _.map(state.dataState.restaurants, function(restaurant) {
    
            if(
                (cuisineFilter === restaurant.cuisine_type || cuisineFilter === 'All') &&
                (neighborhoodFilter === restaurant.neighborhood || neighborhoodFilter === 'All')
            ) {
                results.push(restaurant.latlng);
            }
        });

    }

    results = _.without(results, undefined);

    return results;

}