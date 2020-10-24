import { IRestaurantItem } from "../../../n_logic/api/data/lists/IRestaurantItem";
import RestaurantItemClickCb from "../../../n_utils/callbacks/RestaurantItemClickCb";
import "../../../../styles/n_sass/restaurant_data/item.sass";
import ModalElement from "../modal/ModalElement";
class RestaurantItem extends HTMLElement {

    private _data: IRestaurantItem = null;
    private _cb: RestaurantItemClickCb = null

    private _modalElement: ModalElement = null;

    set data(nData: IRestaurantItem){
        this._data = nData;
    }

    set onClick(cb: RestaurantItemClickCb){
        this._cb = cb;
    }
    
    render() {
        const data = this._data;
        let currentHash = window.location.hash;
        currentHash = currentHash === "" ? "#" : currentHash;
        console.log(data.pictureLocation);
        this.innerHTML = `
                    <div class="card-item-container">
                        <img src=${data.pictureLocation} alt='${data.name} image'></img>
                        
                        <div class='item-header-text' tabIndex='0' role='heading' aria-label='Restaurant ${data.name} from ${data.city}'>
                            <p class='item-header-subtitle'><i class='material-icons'>location_on</i> ${data.city}</p>
                            <div>
                                <div class="grid-header-1">
                                    <h2 class='item-header-title'>${data.name}</h2>
                                    <rating-component rate="4.5" show="true"></rating-component>
                                </div>
                                <div class="grid-header-2">
                                    <a href="${currentHash}" class="material-icons">more_vert</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <modal-element></modal-element>
        `;

        this.implementOnLoadImg();
        this.prepareModal();
        this.implementClick();
    }

    private implementOnLoadImg(){
        this.querySelector(".card-item-container > img").addEventListener("load", (e: Event) => {
            const a : HTMLElement = <HTMLElement> e.target;
            const parent = a.parentElement;
            parent.style.minHeight = "unset"
            parent.style.minWidth = "unset"
        })
    }
    private prepareModal() {
        this._modalElement = this.querySelector("modal-element");
        this._modalElement.content = `
            <h1> Description </h1>
            <p>${this._data.description}</p>
        `;
        this._modalElement.render();
    }

    private implementClick() {
        this.querySelector(".grid-header-2 a").addEventListener("click", (e: Event) => {
            this._modalElement?.toggleModal();
            e.preventDefault();
        });

        this.onclick = (e: Event) => {
            if(e.target !== this) return;
            this._cb(this, this._data)
        }

    }
}

customElements.define("item-restaurant", RestaurantItem);
export default RestaurantItem;