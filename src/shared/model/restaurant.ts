export interface Restaurant {
    id:number;
    name: string;
    photograph:string[];
    address: string;
    latlng: {
        lat: number;
        lng: number;
    };
    cuisine_type: string;
    operating_hours: object;
    reviews: object[];
}