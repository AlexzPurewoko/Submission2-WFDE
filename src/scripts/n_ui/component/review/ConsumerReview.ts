import { IConsumerReview } from "../../../n_logic/api/data/detail/IConsumerReview";
import "../../../../styles/n_sass/review/item-review-consumer.sass";

class ConsumerReview extends HTMLElement {

    private _data: IConsumerReview = null;

    set data(nData: IConsumerReview){
        this._data = nData;
        this.render();
    }
    render(): void {
        if(!this._data) return;
        this.innerHTML = `
            <div class="review-container">
                <div>
                    <span class="material-icons">person_pin</span>
                </div>
                <div>
                    <div class="title-review">
                        <h2>${this._data.name}</h2>
                        <p>${this._data.date}</p>
                    </div>
                    <div class="content-review">
                        <p>${this._data.review ? this._data.review : "No reviews available."}</p>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("review-item-consumer", ConsumerReview);
export default ConsumerReview;