import "../../../../styles/n_sass/footer/home-footer.sass"
import NavItemCallback from "../../../n_utils/callbacks/NavItemCallback";


class HomeActivityFooter extends HTMLElement {

    private _cb: NavItemCallback = null;

    connectedCallback() {
        this.render();
    }

    set callback(_nCb: NavItemCallback){
        this._cb = _nCb;
    }

    toggleActiveItem(target: string) {
        // find the target
        const elmTarget = this.findElementTarget(target);
        console.log(elmTarget);
        // toggle active
        this.toggle(elmTarget);
    }

    private render() {
        this.innerHTML = `
            <nav class="tab-left">
                <ul>
                    <li><i data-target="dashboard" class="material-icons item">home</i></li>
                    <li><i data-target="favorite" class="material-icons item">favorite</i></li>
                    <li><i data-target="about" class="material-icons item">info</i></li>
                </ul>
            </nav>
            <div class="tab-right">
                <p>Copyright @ 2020 APWDevs</p>
            </div>

        `;
        this.implementClick();
    }

    private findElementTarget(target: string): HTMLElement {
        let selected : HTMLElement = null;
        this.querySelectorAll("nav li").forEach((item: HTMLElement) => {
            const elm = item.children[0];
            if(elm.getAttribute("data-target") === target){
                console.log(elm.getAttribute("data-target"));
                selected = <HTMLElement>elm;
                return;
            }
        });

        console.log("RETURN");
        return selected;
    }

    private implementClick() {
        const elm = this.querySelector("nav > ul");
        elm.addEventListener("click", (e: Event) => {
            console.log(e.target);
            const target = <HTMLElement> e.target;
            this.toggle(target);

            // resolving data
            const targetHref = target.getAttribute("data-target");
            this._cb?.onClick(targetHref);
        });
    }

    private toggle(target: HTMLElement){
        const parentUl = target.parentElement.parentElement;
        this.switchOffAll(parentUl.children);

            // switch on
        target.classList.add("footer-nav-item-active");
        target.style.color = "#fff";
    }

    private switchOffAll(childrens: HTMLCollection){
        for(let x=0; x < childrens.length; x++){
            const target = <HTMLElement> childrens[x].children[0];
            target.classList.remove("footer-nav-item-active");
            target.style.color = "";
        }
    }
}

customElements.define("home-footer", HomeActivityFooter);
export default HomeActivityFooter;
