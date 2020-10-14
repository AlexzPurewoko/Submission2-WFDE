import { ApiAllResponse } from "../../allresponse/IAllResponse";
import { ISearchResponse } from "../../data/search/ISearchResponse";
import { endpoint } from "../../endpoint/endpoint";
import BaseApi from "../base/BaseApi";

class RequestSearch extends BaseApi {
    private _query: string = "";

    constructor(query: string) {
        super();
        this._query = query;
    }
    protected fetchPromise(): Promise<Response> {
        return fetch(endpoint.search(this._query));
    }
    protected serveData(jsonData: object): Promise<ApiAllResponse> {
        const composed: ISearchResponse = <ISearchResponse> jsonData;
        return new Promise((resolve, reject) => resolve(composed));
    }

}

export default RequestSearch;