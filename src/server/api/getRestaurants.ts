import { Application, Request, Response } from "express";
import { Restaurant } from "../../shared/model/restaurant";
import { fetchRestaurants } from "../persistence/fetchRestaurants";


export function getRestaurants(app: Application) {

    app.route('/api/restaurants').get((req: Request, res: Response) => {
        
        let restaurants: Restaurant[] = [];

        restaurants = fetchRestaurants();

        res.status(200).json(restaurants);

    });

};