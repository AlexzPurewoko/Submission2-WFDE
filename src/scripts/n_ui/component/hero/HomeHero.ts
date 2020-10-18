import "../../../../styles/n_sass/main/hero-main.sass";
import { Util } from "../../../n_utils/util";

class HomeHero extends HTMLElement {

    private scaleFinished: boolean = true;
    private isAnimStopped: boolean = true;
    private listImage: JQuery<Element>[] = [];
    private listText: JQuery<Element>[] = [];
    private currentIndex: number = 0;
    private currentTextIndex: number = 0;

    onResize() {
        //this.style.height = Util.computeHeight(this.querySelector(".hero_img__faded")) + "px";
        if (this.scaleFinished) {
            this.scaleFinished = false;
            setTimeout(() => {
                const imageElement = this.querySelector(".hero_img__faded");
                const compHeight = Util.computeHeight(imageElement);
                const elm = <HTMLElement>this.querySelector("#hero__container");
                elm.style.height = compHeight + "px";
                this.scaleFinished = true;
            }, 150);
        } else return;
    }

    pauseAnim() {
        this.isAnimStopped = true;
    }

    resumeAnim() {
        if (this.isAnimStopped) {
            this.isAnimStopped = false
            this.anim();
        }
    }

    render() {
        this.innerHTML = `
        <div id="hero__container">
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
        </div>
        `;
        this.listImage = [
            $(this.querySelector("#hero-image_1")),
            $(this.querySelector("#hero-image_2")),
            $(this.querySelector("#hero-image_3"))
        ];

        this.listText = [
            $(this.querySelector("#text-hero_1")),
            $(this.querySelector("#text-hero_2")),
            $(this.querySelector("#text-hero_3"))
        ]
        this.onResize();
    }

    private anim() {
        if (this.isAnimStopped) return;
        setTimeout(() => {
            if (this.isAnimStopped) return;
            this.listImage[this.currentIndex++].slideUp('slow');

            if (this.currentIndex >= this.listImage.length) this.currentIndex = 0;
            this.listImage[this.currentIndex].slideDown('slow', () => this.anim());
            this.listText[this.currentTextIndex++].fadeOut('slow', () => {
                if (this.currentTextIndex >= this.listText.length) this.currentTextIndex = 0;
                this.listText[this.currentTextIndex].fadeIn('slow');
            })
        }, 5000);
    }
}
customElements.define("hero-home", HomeHero);
export default HomeHero;