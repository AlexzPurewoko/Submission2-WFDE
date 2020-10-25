import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { IRestaurantDetailResponse } from "../../data/detail/IRestaurantDetailResponse";
import { endpoint } from "../../endpoint/endpoint";
import { ImageSize } from "../../endpoint/ImageSize";
import BaseApi from "../base/BaseApi";

class GetRestaurantDetail extends BaseApi {
    private _id : string = "";

    set id(nId: string) {
        this._id = nId;
    }
    protected fetchPromise(): Promise<Response> {
        return fetch(endpoint.detail(this._id));
    }
    protected serveData(jsonData: object): Promise<ApiAllResponse> {
        const composed: IRestaurantDetailResponse = <IRestaurantDetailResponse> jsonData;
        composed.restaurant.pictureLocation = endpoint.image(ImageSize.SMALL, composed.restaurant.pictureId);
        return new Promise((resolve, reject) => resolve(composed));
    }

}

export default GetRestaurantDetail;