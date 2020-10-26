import "../../../../styles/n_sass/errorpage/error-page.sass";

interface ErrorType {
    readonly message: string,
    readonly title: string,
    readonly localeUrl: string
}

export const AvailableTypes = {
    searchNotFound: {
        message: "Search with your query unavailable. Please try different queries!",
        title: "Search Unavailable",
        localeUrl: "/images/stories/search-unavailable.svg"
    },
    offline: {
        message: "Response unavailable. Check your internet connection!",
        title: "No Response",
        localeUrl: "/images/stories/failed-stories.svg"
    },
    favUnavailable: {
        message: "Favorite data is empty. Please add some, and your favorites will be displayed here",
        title: "No Favorite :(",
        localeUrl: "/images/stories/please-add-some-data.svg"
    }
};

class ErrorPage extends HTMLElement {

    private _storedTypes: ErrorType = null;

    set errorType(e: ErrorType){
        this._storedTypes = e;
    }

    render(): void {
        if(!this._storedTypes) return;

        const {message, title, localeUrl} = this._storedTypes;
        this.innerHTML = `
            <div class="container-error">
                <img alt="image ${title}" src="${localeUrl}">
                <h1>${title}</h1>
                <h2>${message}</h2>
            </div>
        `;
    }
}
customElements.define("error-page", ErrorPage);
export default ErrorPage;
