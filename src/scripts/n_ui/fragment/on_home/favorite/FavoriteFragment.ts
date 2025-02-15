/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { IDetailRestaurantItem } from "../../../../n_logic/api/data/detail/IDetailRestaurantItem";
import MainObjStore from "../../../../n_logic/db/MainObjStore";
import Fragment from "../../base/Fragment";
import "../../../../../styles/n_sass/fragments/favorites.sass";
import * as utils from "./_utils";
import SpacerLine from "../../../component/spacer/SpacerLine";
import RestaurantList from "../../../component/restaurant_list/RestaurantList";
import RestaurantItem from "../../../component/restaurant_item/RestaurantItem";
import { IRestaurantItem } from "../../../../n_logic/api/data/lists/IRestaurantItem";
import { DBCallbacks } from "../../../../n_logic/db/callbacks/DBCallbacks";
import DatabaseHelper from "../../../../n_logic/db/helper/DatabaseHelper";
import ErrorPage, { AvailableTypes } from "../../../component/errorpage/ErrorPage";

class FavoriteFragment extends Fragment {

    private _spacerLine: SpacerLine = null;
    private _restaurantLists: RestaurantList = null;
    private _errorPage: ErrorPage = null;
    private _loadingView: HTMLElement = null;

    private _databaseCallbacks : DBCallbacks = new DBCallbacks();

    onRenderPage(): void {
        this.innerHTML = this.render();

        this._restaurantLists = this.querySelector("restaurant-list");
        this._spacerLine = this.querySelector("spacer-line");
        this._errorPage = this.querySelector("error-page");
        this._loadingView = this.querySelector(".loading-view");

        this._restaurantLists.onItemClick = (_uiRef: RestaurantItem, data: IRestaurantItem) => {
            window.location.href = `#/DetailActivity/${data.id}/fromFavorite`;
        }
        this._databaseCallbacks.callbacks = (_instance: DatabaseHelper) => {
            this.fetchFromFavorite();
        }
        this.database.addCallbacks(this._databaseCallbacks);
        this._errorPage.errorType = AvailableTypes.favUnavailable;
        this._errorPage.render();

        utils.generateShimmerLoading(this._loadingView);
        
        utils.setSpacerFav(this._spacerLine);
        this.fetchFromFavorite();
        
    }
    onSaveState(): void {
        
    }
    onDestroy(): void {
        this.database.removeCallbacks(this._databaseCallbacks);
    }
    titleFragment(): string {
        return "Favorites"
    }
    onReceiveMessage(_key: string, _value: any): void {
        
    }

    private render() : string {
        return `
            <article tabindex="0" id='main_content2'>
                <h1>Your Favorites</h1>
                <spacer-line></spacer-line>
                <restaurant-list> </restaurant-list>
                <div class="loading-view"></div>
                <error-page></error-page>
            </article>
        
        `;
    }

    private fetchFromFavorite() {
        
        this.hideShow("loading");
        this.database.getAllData(MainObjStore.MAIN_DATABASE)
            .then((item : IDetailRestaurantItem[]) => {
                this.onFinishedFetch(true, item);
            })
            .catch((e: any) => {
                this.onFinishedFetch(false, null, e);
            });

    }

    private onFinishedFetch(success: boolean, item: IDetailRestaurantItem[], _e?: any){
        if(success && item.length > 0){
            const results = utils.cvtFavDataToItem(item);
            this._restaurantLists.render(results);
            this.hideShow("lists");
        } else {
            this.hideShow("error");
        }
    } 

    private hideShow(stateUI: "loading" | "lists" | "error"){
        switch(stateUI){
            case "loading" : {
                $(this._loadingView).show();
                $(this._errorPage).hide();
                $(this._restaurantLists).hide();
                break;
            }
            case "lists": {
                $(this._loadingView).hide();
                $(this._errorPage).hide();
                $(this._restaurantLists).show();
                break;
            }
            case "error": {
                $(this._loadingView).hide();
                $(this._errorPage).show();
                $(this._restaurantLists).hide();
            }
        }
    }

}

customElements.define("favorite-fragment", FavoriteFragment);
export default FavoriteFragment;