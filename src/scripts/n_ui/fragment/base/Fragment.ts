import DatabaseHelper from "../../../n_logic/db/helper/DatabaseHelper";
import { FragmentCallback } from "./FragmentCallback";

abstract class Fragment extends HTMLElement {

    private _db: DatabaseHelper = null;
    private _arguments: any = null;
    private _cb: FragmentCallback = null;

    constructor(_db: DatabaseHelper, _cb: FragmentCallback){
        super();
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

    protected abstract onRenderPage(): void
    protected abstract onSaveState(): void
    protected abstract onDestroy(): void
    protected abstract titleFragment(): string
}

export default Fragment;