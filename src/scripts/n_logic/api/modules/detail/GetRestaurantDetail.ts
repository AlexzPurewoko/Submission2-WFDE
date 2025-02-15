import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { IRestaurantDetailResponse } from "../../data/detail/IRestaurantDetailResponse";
import { endpoint } from "../../endpoint/endpoint";
import { ImageSize } from "../../endpoint/ImageSize";
import BaseApi from "../base/BaseApi";

class GetRestaurantDetail extends BaseApi {
    private _id = "";

    set id(nId: string) {
        this._id = nId;
    }
    protected fetchPromise(): Promise<Response> {
        return fetch(endpoint.detail(this._id));
    }
    protected serveData(jsonData: Record<string, unknown>): Promise<ApiAllResponse> {
        const composed: IRestaurantDetailResponse = <IRestaurantDetailResponse> <unknown> jsonData;
        composed.restaurant.pictureLocation = endpoint.image(ImageSize.SMALL, composed.restaurant.pictureId);
        return new Promise((resolve) => resolve(composed));
    }

}

export default GetRestaurantDetail;