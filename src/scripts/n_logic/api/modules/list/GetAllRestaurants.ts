import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { IRestaurantResponse } from "../../data/lists/IRestaurantResponse";
import { endpoint } from "../../endpoint/endpoint";
import BaseApi from "../base/BaseApi";

class GetAllRestaurants extends BaseApi {

    protected fetchPromise(): Promise<Response> {
        return fetch(endpoint.list());
    }

    protected serveData(jsonData: object): Promise<ApiAllResponse> {
        const composed : IRestaurantResponse = <IRestaurantResponse> jsonData;
        return new Promise((resolve, reject) => resolve(composed))
    }

}

export default GetAllRestaurants;