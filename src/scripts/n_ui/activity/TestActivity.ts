/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import NavItemCallback from "../../n_utils/callbacks/NavItemCallback";
import HomeActivityHeader from "../component/header/HomeActivityHeader";
import BaseActivity from "./base/BaseActivity";
import HomeActivity from "./home/HomeActivity";
//import "../../../styles/sass/index.sass";

// schedule for composing homepage activities....

class TestActivity extends BaseActivity {

    private _homeHeader: HomeActivityHeader;
    onCreated(params: any[]): void {
        super.onCreated(params);
        this.innerHTML = this.renderPage();
    }
    onPaused(): void {
        
    }
    onResumed(): void {
        
    }
    onDestroy(): void {
        
    }
    onResizeEvent(_event: Event): void {
        
    }
    onScrollEvent(_event: Event): void {
        
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
customElements.define("test-activity", TestActivity);