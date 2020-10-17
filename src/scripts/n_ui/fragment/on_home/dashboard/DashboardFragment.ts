import Fragment from "../../base/Fragment";

class DashboardFragment extends Fragment {


    onRenderPage(): void {
        
    }
    onSaveState(): void {
        
    }
    onDestroy(): void {
        
    }
    titleFragment(): string {
        return "Home";
    }
    onReceiveMessage(key: string, value: any): void {
        
    }

    private render() : string {
        return `
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
             
        </div>
    </section>
        `;
    }
}

customElements.define("dashboard-fragment", DashboardFragment);
export default DashboardFragment;