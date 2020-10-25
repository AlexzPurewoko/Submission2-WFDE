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

class FavoriteFragment extends Fragment {

    private _spacerLine: SpacerLine = null;
    private _restaurantLists: RestaurantList = null;

    private _databaseCallbacks : DBCallbacks = new DBCallbacks();

    onRenderPage(): void {
        console.log("onrender");
        this.innerHTML = this.render();

        this._restaurantLists = this.querySelector("restaurant-list");
        this._spacerLine = this.querySelector("spacer-line");

        this._restaurantLists.onItemClick = (uiRef: RestaurantItem, data: IRestaurantItem) => {
            window.location.href = `#/DetailActivity/${data.id}/fromFavorite`;
        }
        this._databaseCallbacks.callbacks = (instance: DatabaseHelper) => {
            console.log("updating favorite db");
            this.fetchFromFavorite();
        }
        this.database.addCallbacks(this._databaseCallbacks);
        
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
    onReceiveMessage(key: string, value: any): void {
        
    }

    private render() : string {
        return `
            <article>
                <h1>Your Favorites</h1>
                <spacer-line></spacer-line>
                <restaurant-list> </restaurant-list>
            </article>
        
        `;
    }

    private fetchFromFavorite() {

        this.database.getAllData(MainObjStore.MAIN_DATABASE)
            .then((item : IDetailRestaurantItem[]) => {
                this.onFinishedFetch(true, item);
            })
            .catch((e: any) => {
                this.onFinishedFetch(false, null, e);
            });

    }

    private onFinishedFetch(success: boolean, item: IDetailRestaurantItem[], e?: any){
        if(success){
            const results = utils.cvtFavDataToItem(item);
            this._restaurantLists.render(results);
        }
    } 

}

customElements.define("favorite-fragment", FavoriteFragment);
export default FavoriteFragment;