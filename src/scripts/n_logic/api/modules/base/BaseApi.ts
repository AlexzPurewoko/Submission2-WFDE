import { ApiAllResponse, IAllResponse } from "../../allresponse/IAllResponse";
import ApiCallbacks from "./ApiCallbacks";


abstract class BaseApi {
    private _callbacks : ApiCallbacks = null;

    protected abstract fetchPromise(): Promise<Response>

    protected abstract async serveData(jsonData: object) : Promise<ApiAllResponse>

    async startLoad(): Promise<void> {
        if(!this._callbacks) return;
        
        try {
            this._callbacks.onLoad();
            const response = await this.fetchPromise();
            const json = await response.json();
            const servedData = await this.serveData(json);

            this._callbacks.onFinished({
                isSuccess: true,
                error: null,
                response: servedData
            });
        } catch(errorResponse: any) {
            this._callbacks.onFinished({
                isSuccess: false,
                error: errorResponse,
                response: null
            });
        }
    }

    set callbacks(newCallbacks: ApiCallbacks){
        this._callbacks = newCallbacks;
    }
}

export default BaseApi;