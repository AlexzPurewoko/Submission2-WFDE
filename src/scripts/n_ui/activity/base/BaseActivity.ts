import DatabaseHelper from "../../../n_logic/db/helper/DatabaseHelper";
import MainDatabase from "../../../n_logic/db/MainDatabase";
import MainApplication from "../../application/application";
import { LifecycleCallback } from "../../application/callback/LifecycleCallback";


abstract class BaseActivity extends HTMLElement implements LifecycleCallback {
    

    protected _application: MainApplication = null;
    private _db: DatabaseHelper = null; 


    set application(app: MainApplication) {
        this._application = app;
    }

    set db(newDb: DatabaseHelper) {
        this._db = newDb;
    }

    get application(): MainApplication {
        return this._application;
    }

    get database(): DatabaseHelper  {
        return this._db;
    }

    // let's the child class override this method
    abstract onCreated(params: any[]): void 
    abstract onPaused(): void 
    abstract onResumed(): void 
    abstract onDestroy(): void
    abstract onResizeEvent(event: Event): void
    abstract onScrollEvent(event: Event): void
}

export default BaseActivity;