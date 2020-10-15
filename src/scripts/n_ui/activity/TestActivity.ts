import BaseActivity from "./base/BaseActivity";
import "../../../styles/sass/index.sass";

// schedule for composing homepage activities....

class TestActivity extends BaseActivity {


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
    onResizeEvent(event: Event): void {
        
    }
    onScrollEvent(event: Event): void {
        
    }

    private renderPage(): string {
        return `

            <a href="#main" tabindex="0" id='skipcontent' class="skip-link">Skip to Content</a>
            <header>
                <home-header class="wrapper"></home-header>
            </header>
            <div class='nav-wrapper' id='nav-slider'>
                <nav aria-hidden='true' class='nav_drawer' id='nav'>
                    <ul class='nav_list'>
                        <li class='nav_item'><a href="/">Home</a></li>
                        <li class='nav_item'><a href="#">Favorite</a></li>
                        <li class='nav_item'><a href="https://www.linkedin.com/in/alexzander-purwoko-w-360932136" target="blank">About Us</a></li>
                    </ul>
                </nav>
            </div>
            <main>
                <section class='hero'>
                    <div 
                        class='hero__image' 
                        id='image__hero_main'>
                        
                        <img 
                            id='hero-image_1'

                            class='hero_img__faded' 
                            src='/images/heros/hero-image_1.jpg' 
                            alt='Our master chef image'></img>

                        <img 
                            id='hero-image_2'
                            style='display: none;'
                            class='hero_img__faded transparent' 
                            src='/images/heros/hero-image_2.jpg' 
                            alt='A menu image'></img>

                        <img 
                            id='hero-image_3'
                            style="display: none;"
                            class='hero_img__faded transparent' 
                            src='/images/heros/hero-image_3.jpg' 
                            alt='Ingredients image'></img>
                    </div>
                    <div 
                        class='hero__text' 
                        id='explain__text_hero'>
                        <article id='text-hero_1'>
                            <h1 tabIndex="0" id='text_container_1'>Chef</p>
                            <h2 tabIndex="0" id='text_container_2'>We have a most talented chef in my restaurant's group</p>
                        </article>
                        <article id='text-hero_2' style="display: none;">
                            <h1 tabIndex="0" id='text_container_1'>Food</p>
                            <h2 tabIndex="0" id='text_container_2'>We serve many of good food beside's you want</p>
                        </article>
                        <article id='text-hero_3' style="display: none;">
                            <h1 tabIndex="0" id='text_container_1' >Ingredients</p>
                            <h2 tabIndex="0" id='text_container_2'>We selecting many good ingredients for making a taste food</p>
                        </article>
                    </div>
                </section>

                <section class='main' id='main_content'>
                    <div id='main' ></div>
                    <div tabIndex="0" role="heading" aria-labelledby="look-restaurant" class='title_main'>
                        <h1 id='look-restaurant'>Let's Look</h1>
                        <svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                            <line x1="-1" y1="3" x2="7" y2="3" stroke="#00639B" stroke-linecap="round" />
                        </svg>
                    </div>
                    
                    <div class='list-restaurants' id="list__restaurant">
                        <!-- Filled ini ES6 -->
                    </div>
                </section>
            </main>

            <footer class="close">
                <p class='footer_left' tabindex="0">Copyright @2020 APWDevs</p>
                <p class='footer_right' tabindex="0" aria-label="Thanks to dicoding">@DicodingIDN</p>
            </footer>
        
        `;
    }

}
customElements.define("test-activity", TestActivity);