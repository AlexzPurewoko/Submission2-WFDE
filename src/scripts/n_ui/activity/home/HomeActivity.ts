import { Button, ParagraphText } from '../../../n_utils/element_types';
import BaseActivity from '../base/BaseActivity'

class HomeActivity extends BaseActivity {

    private textP: ParagraphText = null;
    private buttonNext: Button = null;

    render(){
        this.innerHTML = `<p>Hello World</p>
            <button>Click Me!</button>
        `
    }

    onCreated(params: any[]): void {
        this.render();
        console.log(params);
        this.textP = this.querySelector("p");
        this.textP.innerText += '\nonCreated()';

        this.buttonNext = this.querySelector("button");
        this.buttonNext.addEventListener("click", (e: Event) => window.location.hash = "#/DetailActivity/aa77ASdb");
    }
    onPaused(): void {

        this.textP.innerText += '\onPaused()';
    }
    onResumed(): void {
        
        this.textP.innerText += '\nonResumed()';
    }
    onDestroy(): void {
        this.textP.innerText = '\nonDestroy()';
    }
    onResizeEvent(event: Event): void {
        console.log(window.innerWidth);
    }
    onScrollEvent(event: Event): void {
        console.log(window.scrollY);
    }

}
customElements.define("home-activity", HomeActivity);
export default HomeActivity;