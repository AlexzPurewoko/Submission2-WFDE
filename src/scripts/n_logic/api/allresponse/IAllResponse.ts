import { IRestaurantDetailResponse } from "../data/detail/IRestaurantDetailResponse";
import { IRestaurantResponse } from "../data/lists/IRestaurantResponse";
import { IResultReview } from "../data/review/IResultReview";
import { ISearchResponse } from "../data/search/ISearchResponse";

export interface IAllResponse {
    readonly isSuccess: boolean,
    readonly error: any,
    readonly response: IRestaurantDetailResponse | IRestaurantResponse | IResultReview | ISearchResponse
}