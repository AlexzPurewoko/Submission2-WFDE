import MainDatabase from "../../n_logic/db/MainDatabase";
import BaseActivity from "../activity/base/BaseActivity";
import { LifecycleCallback } from "./callback/LifecycleCallback";
import { ActivityInfo, AppManifest } from "./manifest/AppManifest";

interface BackStackProperty {
    hashURI: string,
    element: BaseActivity,
    activityInfo: ActivityInfo
}

class MainApplication extends HTMLElement {

    private readonly _db : MainDatabase = null;
    private readonly _manifest = AppManifest;

    private currentActivityInfo: ActivityInfo = null;
    private currentActivityRef: BaseActivity = null;
    private activityBackStack: BackStackProperty[] = [];

    private listenerReference = {
        hashChange: (e: Event) => this.onHashChanged(e),
        onResize: (e: Event) => this.onResizeCallback(e),
        onScroll: (e: Event) => this.onScrollChange(e)
    }
    
    constructor(){
        super();
        this._db = new MainDatabase();
    }

    runApplication() {
        
        // if its empty, then start root/homepage.
        if(window.location.hash === ""){
            const homepageInfo = this._manifest.activities.get(this._manifest.homepage);
            this.moveToNextActivity(homepageInfo, null);
        } else {
            const hashGet = window.location.hash.slice(1);
            const urlParams = hashGet.split("/");

            const activityInfo = this._manifest.activities.get(urlParams[1]);
            const parameters = urlParams.slice(2, urlParams.length);

            this.moveToNextActivity(activityInfo, parameters);
        }
        // register the event action
        document.addEventListener('hashchange', this.listenerReference.hashChange);
        document.addEventListener("resize", this.listenerReference.onResize);
        document.addEventListener("scroll", this.listenerReference.onScroll);
    }

    // Preferred only for activity instance to ensures that they 
    // can move to previous activity
    activityBack() {
        const lastElement = this.getBackStackLastElement();
        if(!lastElement) {
            console.log("Cannot back, because the instance is null");
            return;
        }
        window.location.hash = '#' + lastElement.hashURI;
    }

    disconnectedCallback(){
        this.activityBackStack = [];
        document.removeEventListener("hashchange", this.listenerReference.hashChange);
        document.removeEventListener("resize", this.listenerReference.onResize);
    }

    private getBackStackLastElement(): BackStackProperty {
        if(this.activityBackStack.length < 1) return null;
        return this.activityBackStack[this.activityBackStack.length - 1];
    }

    private createActivity(activityInfo: ActivityInfo): BaseActivity{
        const createdActivity = <BaseActivity> document.createElement(activityInfo.activityName);
        createdActivity.application = this;
        createdActivity.db = this._db;
        return createdActivity;
    }

    private applyActivity(activity: BaseActivity, activityInfo: ActivityInfo){
        this.currentActivityRef = activity;
        this.currentActivityInfo = activityInfo;

        this.innerHTML = '';
        this.append(activity);
        activity.onResumed();
    }

    private backToLastActivity() {

        if(this.activityBackStack.length <= 1) return;
        const currentStack = this.activityBackStack.pop();
        const currentLifecycle = <LifecycleCallback> currentStack.element;
        currentLifecycle.onDestroy();

        const targetActivity = this.getBackStackLastElement();
        targetActivity.element.onResumed();

        this.applyActivity(targetActivity.element, targetActivity.activityInfo);
    }

    private moveToNextActivity(activityInfo: ActivityInfo, params: any[]){
        const actCreated = this.createActivity(activityInfo);
        actCreated.onCreated(params);

        if(!activityInfo.isRootActivity || this.currentActivityRef === null){

            // push the current activity to backstack
            this.pushToStack();

            // call onPause for current activity
            this.currentActivityRef.onPaused();
        } else {
            this.activityBackStack = [];
        }
        
        // apply created activity to show
        this.applyActivity(actCreated, activityInfo);
    }

    private pushToStack() {
        const backStackProperty: BackStackProperty = {
            hashURI: window.location.hash.slice(1),
            element: this.currentActivityRef,
            activityInfo: this.currentActivityInfo
        }
        this.activityBackStack.push(backStackProperty);
    }

    private onScrollChange(event: Event){
        if(!this.currentActivityRef) return;
        const lifecycleCb = <LifecycleCallback> this.currentActivityRef;
        lifecycleCb.onScrollEvent(event);
    }
    private onResizeCallback(event: Event) {
        if(!this.currentActivityRef) return;
        const lifecycleCb = <LifecycleCallback> this.currentActivityRef;
        lifecycleCb.onResizeEvent(event);
    }

    private onHashChanged(event: Event) {
        const hash = window.location.hash.slice(1);
        const urlParts = hash.split("/");

        const isFound = this.activityBackStack.findIndex(item => item.hashURI === hash) === this.activityBackStack.length - 1 ? true: false;
        const activity = urlParts[1];

        // if is just back to the last activity, then it will 
        if(isFound){
            this.backToLastActivity();
        } else {
            // if its not back, then add it into stack...
            const parameters = urlParts.splice(2, urlParts.length);
            const getActivityInfo = this._manifest.activities.get(activity);

            this.moveToNextActivity(getActivityInfo, parameters);
        }
    }
}
customElements.define("application-main", MainApplication);
export default MainApplication;