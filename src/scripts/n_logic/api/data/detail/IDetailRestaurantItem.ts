import { IConsumerReview } from "./IConsumerReview";
import { IRestaurantMenus } from "./IRestaurantMenus";
import { ISingleName } from "./ISingleName";

export interface IDetailRestaurantItem {
    readonly id: string,
    readonly name: string,
    readonly rating: number,
    readonly pictureId: string,
    readonly address: string,
    readonly city: string,
    readonly description: string,
    readonly categories: ISingleName[],
    readonly menus: IRestaurantMenus,
    readonly consumerReviews: IConsumerReview[]
    pictureLocation?: string
}