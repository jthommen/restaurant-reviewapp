// API Endpoints for the restaurant review App

import * as express from 'express';
import { Application } from 'express';
import { getRestaurants } from './api/getRestaurants';
const bodyParser = require('body-parser');

const port = 8090;

const app: Application = express();

app.use(bodyParser.json());

// API Endpoints

// fetchRestaurantById
// fetchRestaurantsByCuisine
// fetchRestaurantsByNeighborhood
// fetchRestaurantsByCuisineAndNeighborhood

getRestaurants(app);
// fetch Neighborhoods
// fetchCuisines

// urlForRestaurant
// imageUrlsForRestaurant
// mapMarkerForRestaurant

app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});


