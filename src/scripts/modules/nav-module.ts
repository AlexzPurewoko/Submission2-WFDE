const applyNav = () => {
    const navSlider = $('#nav-slider');
    const applyClick = (e: Event, isMenu: boolean = false) => {
        
        if(navSlider.hasClass('open')){
            navSlider.addClass('close');
            navSlider.children().attr('aria-hidden', 'true');
            navSlider.removeClass('open');
        } else if(isMenu) {
            navSlider.addClass('open');
            navSlider.children().attr('aria-hidden', 'false');
            navSlider.removeClass('close');
        }
        e.stopPropagation();
    }

    $('#menu').on('click', (e:Event) => applyClick(e, true));
    $('#nav-slider .nav-list').on('click', applyClick);
    $('main').on('click', applyClick);
}

export default applyNav;