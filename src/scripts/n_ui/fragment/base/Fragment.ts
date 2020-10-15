import DatabaseHelper from "../../../n_logic/db/helper/DatabaseHelper";
import { FragmentCallback } from "./FragmentCallback";

abstract class Fragment extends HTMLElement {

    private _db: DatabaseHelper = null;
    private _arguments: any = null;
    private _cb: FragmentCallback = null;


    initialize(_db: DatabaseHelper, _cb: FragmentCallback){
        this._db = _db;
        this._cb = _cb;
    }

    set arguments(nArguments: any){
        this._arguments = nArguments;
    }

    get arguments() {
        return this._arguments;
    }
    
    get database() {
        return this._db;
    }

    protected send(key: string, value: any){
        if(this._cb){
            this._cb.onReceive(key, value);
        }
    }

    abstract onRenderPage(): void
    abstract onSaveState(): void
    abstract onDestroy(): void
    abstract titleFragment(): string
    abstract onReceiveMessage(key: string, value: any): void
}

export default Fragment;