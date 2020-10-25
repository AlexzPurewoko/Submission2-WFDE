import { head } from "lodash";
import { IDetailRestaurantItem } from "../../../../n_logic/api/data/detail/IDetailRestaurantItem";
import { IRestaurantItem } from "../../../../n_logic/api/data/lists/IRestaurantItem";
import SpacerLine, { SpacerAttrs } from "../../../component/spacer/SpacerLine";

export const setSpacerFav = (target: SpacerLine) => {
    const spacerAttrs : SpacerAttrs = {
        color: "#d76700",
        style: "horizontal",
        width: 50,
        height: 6
    }
    target.attrs = spacerAttrs;
}

export const cvtFavDataToItem = (source: IDetailRestaurantItem[]): IRestaurantItem[] => {
    const items: IRestaurantItem[] = [];

    source.forEach((itemDetail: IDetailRestaurantItem) => {
        items.push({
            id: itemDetail.id,
            name: itemDetail.name,
            rating: itemDetail.rating,
            pictureId: itemDetail.pictureId,
            city: itemDetail.city,
            description: itemDetail.description,
            pictureLocation: itemDetail.pictureLocation
        });
    })
    return items;
}