class HomeActivityHeader extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }
    
    private render() {
        this.innerHTML = `
            <div class='container__logo' >
                <input 
                    type="image" 
                    src="/images/icons/hamburger-icon.svg"
                    tabindex="0" 
                    name="saveForm" 
                    class="btTxt submit"
                    aria-label="menu logo"
                    id="menu"/>

                <input 
                    type="image" 
                    src="/images/icons/restaurant-icon.svg"
                    tabindex="0" 
                    name="saveForm" 
                    aria-label="Logo FavResto"
                    onclick='window.location.href="#"'
                    id="logo"/>
            </div>
            <div class='logo_brand' tabIndex="0" role='banner' aria-label="FavResto site">
                <h1 class='logo_brand_title_1'>Fav</h1>
                <h1 class='logo_brand_title_2'>Resto</h1>
            </div>
            <div class='nav-wrapper'>
                <nav class='nav_drawer' id='nav'>
                    <ul class='nav_list'>
                        <li class='nav_item'><a href="/">Home</a></li>
                        <li class='nav_item'><a href="#">Favorite</a></li>
                        <li class='nav_item'><a href="https://www.linkedin.com/in/alexzander-purwoko-w-360932136" target="blank">About Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define("home-header", HomeActivityHeader);