import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { IRestaurantItem } from "../../data/lists/IRestaurantItem";
import { IRestaurantResponse } from "../../data/lists/IRestaurantResponse";
import { endpoint } from "../../endpoint/endpoint";
import { ImageSize } from "../../endpoint/ImageSize";
import BaseApi from "../base/BaseApi";

class GetAllRestaurants extends BaseApi {

    protected fetchPromise(): Promise<Response> {
        return fetch(endpoint.list());
    }

    protected serveData(jsonData: object): Promise<ApiAllResponse> {
        const composed : IRestaurantResponse = <IRestaurantResponse> jsonData;
        composed.restaurants.forEach((i: IRestaurantItem) => {
            i.pictureLocation = endpoint.image(ImageSize.SMALL, i.pictureId);
        })
        return new Promise((resolve, reject) => resolve(composed))
    }

}

export default GetAllRestaurants;