import { head } from "lodash";
import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { IPostReview } from "../../data/review/IPostReview";
import { IResultReview } from "../../data/review/IResultReview";
import { UConfig } from "../../endpoint/BaseConfig";
import { endpoint } from "../../endpoint/endpoint";
import BaseApi from "../base/BaseApi";

class PostReview extends BaseApi {

    private readonly _reviewData: IPostReview;
    constructor(reviewData: IPostReview){
        super();
        this._reviewData = reviewData;
    }

    protected fetchPromise(): Promise<Response> {
        const rawStringObjects = JSON.stringify(this._reviewData);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("X-Auth-Token", UConfig.authToken);

        const reqOptions : RequestInit = {
            method: "POST",
            headers: headers,
            body: rawStringObjects,
            redirect: "follow"
        }
        return fetch(endpoint.postReview(), reqOptions);
    }
    protected serveData(jsonData: object): Promise<ApiAllResponse> {
        const composed : IResultReview = <IResultReview> jsonData;
        return new Promise((resolve, reject) => resolve(composed));
    }

}

export default PostReview;