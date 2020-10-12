
let currentTargetElement: JQuery<HTMLElement> = null;
let locks: boolean = false;
const eventScroll = (e: Event) => {
    if(locks) return;
    if(currentTargetElement){
        currentTargetElement.css('height', '0');
    }
    e.preventDefault();
}

const scrollToHero = ()=> {
    locks = true;
    currentTargetElement.css('height', `${$('header').height() + 2}px`);
    const h = $('.hero').height();
    let scrollY = 0;
    if(window.pageYOffset === 0){
        scrollY = h;
    } else if(window.pageYOffset < h || window.pageYOffset > h){
        scrollY = h - window.pageYOffset;
    }
    window.scrollBy(0, scrollY);
    
    setTimeout(()=> locks = false, 100);
}


const applyOnclickNavItem = () => {
    $('.nav_list').children().each((index: number, element: HTMLElement) => {
        $(element).on('click', e => {
            let childElm = $(e.target);
            childElm = childElm.children()[0] ? childElm.children() : childElm;
            
            const attr = childElm.attr('href');
            if(attr === '#main'){
                currentTargetElement = $(attr);
                scrollToHero();
                e.preventDefault();
            }
        });
    });

    //apply skip to content
    $('#skipcontent').on('click', e => {
        setTimeout(_ => {
            currentTargetElement = $('#main');
            scrollToHero();
        }, 150);
        //$('#skipcontent').removeClass('skip-link');
        //$('#skipcontent').addClass('skip-link');

        //e.preventDefault();
        //return false;
    })

    window.addEventListener('scroll', eventScroll);
}

export default applyOnclickNavItem;