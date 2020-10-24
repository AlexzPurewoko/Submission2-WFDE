import { IRestaurantItem } from "../../../../n_logic/api/data/lists/IRestaurantItem";
import { endpoint } from "../../../../n_logic/api/endpoint/endpoint";
import { ImageSize } from "../../../../n_logic/api/endpoint/ImageSize";
import RestaurantItemClickCb from "../../../../n_utils/callbacks/RestaurantItemClickCb";
import SearchElementCb from "../../../../n_utils/callbacks/SearchElementCb";
import HomeHero from "../../../component/hero/HomeHero";
import RestaurantItem from "../../../component/restaurant_item/RestaurantItem";
import RestaurantList from "../../../component/restaurant_list/RestaurantList";
import SearchElement from "../../../component/search/SearchElement";
import Fragment, { GeneralCb } from "../../base/Fragment";
import "../../../../../styles/n_sass/fragments/dashboard.sass";
import SpacerLine, { SpacerAttrs } from "../../../component/spacer/SpacerLine";
import { head } from "lodash";
import GetAllRestaurants from "../../../../n_logic/api/modules/list/GetAllRestaurants";
import RequestSearch from "../../../../n_logic/api/modules/searchResult/RequestSearch";
import ApiCallbacks from "../../../../n_logic/api/modules/base/ApiCallbacks";
import { IAllResponse } from "../../../../n_logic/api/allresponse/IAllResponse";
import BaseApi from "../../../../n_logic/api/modules/base/BaseApi";
import { IRestaurantResponse } from "../../../../n_logic/api/data/lists/IRestaurantResponse";
import ShimmerLoading from "../../../component/loading/ShimmerLoading";
import * as utils from "./_utils";


const spacerAttrs: SpacerAttrs[] = [
    {
        color: "red",
        style: "vertical",
        width: 40,
        height: 6
    },
    {
        color: "red",
        style: "horizontal",
        width: 70,
        height: 6
    }
];

class DashboardFragment extends Fragment implements ApiCallbacks {

    // view elements.
    private homeHero:HomeHero = null;
    private searchElement: SearchElement;
    private spacerLine: SpacerLine = null;
    private restaurantList: RestaurantList = null;
    private shimmerLoadingView: HTMLElement = null;



    private apiRest: BaseApi = null;
    

    onRenderPage(): void {
        this.innerHTML = this.render();
        this.homeHero = this.querySelector("hero-home");
        this.spacerLine = this.querySelector("spacer-line");
        this.searchElement = this.querySelector("search-box");
        this.restaurantList = this.querySelector("restaurant-list");
        this.shimmerLoadingView = this.querySelector(".loading-view");
        

        this.homeHero.render();
        this.homeHero.resumeAnim();
        this.searchElement.searchCallback = (text: string) => {
            this.onSearch(text);
        }
        this.swSpacer("horizontal");

        // generate shimmer loading
        utils.generateShimmerLoading(this.shimmerLoadingView);
        utils.toggleView(this.shimmerLoadingView, "off");
        // display shimmer loading 
        this.defineSpacer();
        
        
    }
    onSaveState(): void {
        this.homeHero.pauseAnim();
    }
    onDestroy(): void {
        
    }
    titleFragment(): string {
        return "Home";
    }
    onReceiveMessage(key: GeneralCb, value: any): void {
        if(key === GeneralCb.MESSAGE_ONRESIZE) {
            this.defineSpacer();
        }
    }

    onLoad() {
        // loading goes here...
        utils.toggleView(this.shimmerLoadingView, "show");
        utils.toggleView(this.restaurantList, "off");
    }

    onFinished(data: IAllResponse) {
        utils.toggleView(this.shimmerLoadingView, "off");
        utils.toggleView(this.restaurantList, "show");
        if(data.isSuccess && data.response.error === false){
            const resp = <IRestaurantResponse> data.response;
            this.renderListRestaurant(resp.restaurants);
        }
        console.log(data);
    }

    private render() : string {
        return `
            <section class='hero'>
                <hero-home></hero-home>
            </section>
            <section class='main' id='main_content' style="margin: 10px;">
                <div class="titles">
                    <div class="title-search">
                        <h1>Looking for ?</h1>
                    </div>
                    <spacer-line> </spacer-line>
                    <search-box></search-box>
                </div>
                <restaurant-list></restaurant-list>
                <div class="loading-view"></div>
            </section>
        `;
    }

    private defineSpacer() {
        if(window.innerWidth <= 700) {
            this.swSpacer("horizontal");
        } else {
            this.swSpacer("vertical");
        }
    }

    private onSearch(text: string){
        if(text.length < 1) return;
        this.clearApisRunning();

        this.apiRest = new RequestSearch(text);
        this.apiRest.callbacks = this;
        this.apiRest.startLoad();
    }

    private renderListRestaurant(restaurantItem: IRestaurantItem[]){
        console.log(restaurantItem);
        this.restaurantList.render(restaurantItem);
    } 

    private clearApisRunning() {
        if(this.apiRest != null && this.apiRest.isRunning){
            //remove the current callbacks to prevent updating
            this.apiRest.callbacks = null;
            this.apiRest = null;
        }
    }

    private swSpacer(str: 'horizontal' | 'vertical'){
        switch(str){
            case "horizontal":
                this.spacerLine.attrs = spacerAttrs[1]
                break;
            case "vertical":
                this.spacerLine.attrs = spacerAttrs[0]
        }
    }
}

customElements.define("dashboard-fragment", DashboardFragment);
export default DashboardFragment;