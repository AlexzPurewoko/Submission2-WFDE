import { IAllResponse } from "./n_logic/api/allresponse/IAllResponse";
import { IPostReview } from "./n_logic/api/data/review/IPostReview";
import GetAllRestaurants from "./n_logic/api/modules/list/GetAllRestaurants"
import PostReview from "./n_logic/api/modules/reviewResult/PostReview";
import MainApplication from "./n_ui/application/application"


$(() => {
    //new MainApplication().runApplication();
    const cb = {
        onFinished: (data: IAllResponse) => console.log(data),
        onLoad: () => {console.log("onLoad()")}
    };

    const reviewData: IPostReview = {
        id: "rqdv5juczeskfw1e867",
        name: "HelloHAI",
        review: "Nyoba aja kok"
    }
    const a = new PostReview(reviewData);
    a.callbacks = cb;
    a.startLoad();
})