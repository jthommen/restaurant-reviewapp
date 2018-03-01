import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";
import { Restaurant } from "../../shared/model/restaurant";
import { AngularFireStorage } from "angularfire2/storage";

@Injectable()
export class RestaurantService {

    restaurantCollection: AngularFirestoreCollection<Restaurant>;
    restaurantImageReferences;
    
    constructor(
        private db: AngularFirestore,
        private storage: AngularFireStorage){
        this.restaurantCollection = db.collection('restaurants');
    }

    loadRestaurantData():Observable<any> {
        return this.restaurantCollection.valueChanges();
    }
}