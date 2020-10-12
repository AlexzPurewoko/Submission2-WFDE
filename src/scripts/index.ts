import 'regenerator-runtime';
import 'material-icons';
import 'material-icons/css/material-icons.min.css';
import '../styles/sass/index.sass';
import { DataObject } from './api/DataObject';
import { DataImplement } from './api/DataImplement';
import { articleItem } from './modules/article-item';
import applyChanging from './modules/heroimage-change';
import applyNav from './modules/nav-module';
import applyOnclickNavItem from './modules/onclicknav-module';
import applyRemoveSpaceAfterTranslate from './modules/remove-translate-space';
import applySticky from './modules/sticky-header';

const clearSpaceTranslate = (index: number, jElement: JQuery<HTMLElement>) => {
    const containerItem = jElement;
    
    const imageContainer = containerItem.find('.container-item-image');
    const headerContainer = containerItem.find('.item-header');
    if(imageContainer.height() < 1) {
        setTimeout(() => clearSpaceTranslate(index, jElement), 100);
        return;
    }

    headerContainer.css('height', `${imageContainer.height()}px`);
};

let eventListener: () =>void = null;

const success = (data: DataObject) => {
    let elm: string = ''
    data.restaurants.forEach(item => {
        elm += articleItem(item)
    });

    if(eventListener){
        window.removeEventListener('resize', eventListener);
        eventListener = null;
        $('.list-restaurants').empty();
    }
    $('.list-restaurants').append(elm);
    setTimeout(() => {
        $('.list-restaurants').children().each((index, item) => {
            clearSpaceTranslate(index, $(item));
        });
    }, 100);
    eventListener = () => {
        $('.list-restaurants').children().each((index, item) => {
            clearSpaceTranslate(index, $(item));
        });
    }
    window.addEventListener('resize', eventListener);
}

const failed = (error: string) => {
    console.error(error);
}
document.addEventListener('DOMContentLoaded', () => {

    // runs after DOM Element has been initiated!
    applySticky();
    applyNav();
    applyRemoveSpaceAfterTranslate();
    applyOnclickNavItem();
    applyChanging();
    
    const load = new DataImplement();
    load.getData(success, failed)  
});

