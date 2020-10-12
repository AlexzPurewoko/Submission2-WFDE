import { DataItem } from "../api/DataObject";

export const articleItem = (data: DataItem) => `
    <article class='container-item'>
        <div class='item-header'>
            <div class='container-item-image'>
                <img src=${data.pictureId} alt='${data.name} image'></img>
            </div>
            <div class='item-header-text' tabIndex='0' role='heading' aria-label='Restaurant ${data.name} from ${data.city}'>
                <h2 class='item-header-title'>${data.name}</h2>
                <h3 class='item-header-subtitle'><i class='material-icons'>location_on</i> ${data.city}</h3>
            </div>
        </div>
        <div class='item-content'>
            <p class='rating-show' tabIndex="0" role='feed' aria-label='Rating ${data.rating} of 5'><i class='material-icons' style="color:orange" >star</i> ${data.rating}</p>
            <p class='item-description'>Description :</p>
            <p class='description-item-content' role='contentinfo' tabIndex='0'>${data.description}</p>
        </div>
    </article>
`;