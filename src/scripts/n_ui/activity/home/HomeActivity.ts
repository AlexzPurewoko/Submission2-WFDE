import NavItemCallback from '../../../n_utils/callbacks/NavItemCallback';
import { Button, ParagraphText } from '../../../n_utils/element_types';
import HomeActivityFooter from '../../component/footer/HomeActivityFooter';
import HomeActivityHeader from '../../component/header/HomeActivityHeader';
import { GeneralCb } from '../../fragment/base/Fragment';
import FavoriteFragment from '../../fragment/on_home/favorite/FavoriteFragment';
import BaseActivity from '../base/BaseActivity'

class HomeActivity extends BaseActivity {
    private _homeHeader: HomeActivityHeader;
    private _homeFooter: HomeActivityFooter;

    private _navItemCb: NavItemCallback = (elm: HTMLElement, ret: string) => {
        if(elm instanceof HomeActivityHeader){
            this._homeFooter?.toggleActiveItem(ret);
        } else {
            this._homeHeader?.toggleActiveItem(ret);
        }
        this.mitigateFragment(ret);
    }

    private mapActiveFragment = new Map<string, boolean>([
        ["dashboard", false],
        ["favorite", false],
        ["about", false]
    ]);

    onCreated(params: any[]): void {
        super.onCreated(params);
        this.innerHTML = this.renderPage();

        this._homeHeader = this.querySelector("home-header");
        this._homeFooter = this.querySelector("home-footer");

        this._homeHeader.callback = this._navItemCb;
        this._homeFooter.callback = this._navItemCb;
        this._homeHeader.render();
        this._homeFooter.render();

        // add all fragment to layout
        const mainElement = this.querySelector("main");
        this.fragmentAdapter.attachFragment("dashboard", "dashboard-fragment", mainElement);
        this.fragmentAdapter.attachFragment("favorite", "favorite-fragment", mainElement);
        this.fragmentAdapter.attachFragment("about", "about-fragment", mainElement);


        this._homeFooter.toggleActiveItem("dashboard");

    }
    onPaused(): void {
        
    }
    onResumed(): void {
        
    }
    onDestroy(): void {
        // detach all fragments
        const keyArrays = this.mapActiveFragment.keys;
        this.mapActiveFragment.forEach((value: boolean, key: string) => {
            this.fragmentAdapter.detachFragment(key);
        });
    }
    onResizeEvent(event: Event): void {
        this.mapActiveFragment.forEach((val: boolean, key: string) => {
            if(val){
                this.fragmentAdapter.sendMessage(key, GeneralCb.MESSAGE_ONRESIZE, event);
            }
        });
    }
    onScrollEvent(event: Event): void {
        this.mapActiveFragment.forEach((val: boolean, key: string) => {
            if(val){
                this.fragmentAdapter.sendMessage(key, GeneralCb.MESSAGE_ONSCROLL, event);
            }
        });
    }

    private mitigateFragment(navRef: string){
        // if is same with current show fragment, then will returned
        if(this.mapActiveFragment.get(navRef)) return;
        this.mapActiveFragment.forEach((val: boolean, key: string)=> {
            if(val){
                this.fragmentAdapter.hideFragment(key);
                this.mapActiveFragment.set(key, !val);
            }
        });

        this.fragmentAdapter.showFragment(navRef);

        this.mapActiveFragment.set(navRef, true);
    }

    private renderPage(): string {
        return `

            <a href="#main" tabindex="0" id='skipcontent' class="skip-link">Skip to Content</a>
            <header>
                <home-header class="wrapper"></home-header>
            </header>

            <main>
                <!-- all fragment goes here, and triggered with tabs -->
            </main>

            <footer>
                <!--<p class='footer_left' tabindex="0">Copyright @2020 APWDevs</p>
                <p class='footer_right' tabindex="0" aria-label="Thanks to dicoding">@DicodingIDN</p>-->
                <home-footer> </home-footer>
            </footer> 
        
        `;
    }
}
customElements.define("home-activity", HomeActivity);
export default HomeActivity;