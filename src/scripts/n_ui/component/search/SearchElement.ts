import { Button, InputText } from "../../../n_utils/element_types";
import "../../../../styles/n_sass/search/search.sass";
import SearchElementCb from "../../../n_utils/callbacks/SearchElementCb";
class SearchElement extends HTMLElement {

    private _btnSearch: Button = null;
    private _edtText: InputText = null;

    private _cb : SearchElementCb = null;
    private _hasRender: boolean = false;

    set searchCallback(callback: SearchElementCb){
        this._cb = callback;
        if(this._hasRender){
            this.initializeElement();
        }
    }

    connectedCallback() {
        this.render();
        this._hasRender = true;
    }

    render() {
        this.innerHTML = `
            <div class="search-container">
                <div class="search-icons">
                    <span class="material-icons">search</span>
                </div>
                <input type="text" name="search" class="search-input" placeholder="Search any....">
                <button class="submit"><i class="material-icons">chevron_right</i></button>
            </div>
        `;
        this.initializeElement();
    }

    initializeElement() {
        this._edtText = this.querySelector(".search-input");
        this._btnSearch = this.querySelector(".submit");

        this._btnSearch.onclick = () => {
            const retValue = $(this._edtText).val().toString();
            if(this._cb)
            this._cb(retValue)
        }
    }
}
customElements.define("search-box", SearchElement);
export default SearchElement;