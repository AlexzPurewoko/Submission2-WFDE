import ShimmerLoading from "../../../component/loading/ShimmerLoading";
import CardItem from "../../../component/loading/typeloading/CardItem";

export const generateShimmerLoading = (shimmer: HTMLElement) => {
    const shimmers : ShimmerLoading[] = [];
    for(let x = 0; x < 3; x++){
        const shimmLoading = <ShimmerLoading> document.createElement("shimmer-loading");
        shimmLoading.views = new CardItem();
        shimmers.push(shimmLoading);
    }
    $(shimmer).append(shimmers);
}

export const toggleView = (elm: HTMLElement, toggle: "show" | "off") => {
    switch(toggle){
        case "show" : 
            $(elm).show();
            break;
        case "off": 
            $(elm).hide();
    }
}