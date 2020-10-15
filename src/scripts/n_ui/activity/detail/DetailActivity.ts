import { Button } from "../../../n_utils/element_types";
import BaseActivity from "../base/BaseActivity";

class DetailActivity extends BaseActivity {

    private buttonBack: Button = null;
    onCreated(params: any[]): void {
        super.onCreated(params);
        this.innerHTML = `
            <p>${params[0]}</p>
            <button>Back click</button>
        `;

        this.buttonBack = this.querySelector("button");
        this.buttonBack.addEventListener("click", (e: Event) => {
            this._application.activityBack();
        })
    }
    onPaused(): void {
        
    }
    onResumed(): void {
        
    }
    onDestroy(): void {
        console.log("onDestroy Detail Activity!")
    }
    onResizeEvent(event: Event): void {
        
    }
    onScrollEvent(event: Event): void {
        
    }
    
}
customElements.define("detail-activity", DetailActivity);
export default DetailActivity;