const addPadding = () => {
    const height: number = $('footer').outerHeight();
    if(height < 1) {
        setTimeout(addPadding, 100);
        return;
    }
    $('main').css('padding-bottom', `${height + 10}px`);
}

const applySticky = () => {
    let prevY: number = 0;
    $(window).on('scroll', _ => {
        const header = $('header');
        const slider = $('#nav-slider');
        const footer = $('footer');
        const pos: number = header[0].offsetTop;

    
        if(window.pageYOffset > pos){
            header.addClass('sticky');
            slider.addClass('sticky');
            slider.css('top', `${header.height() + 4}px`);
            
        } else {
            header.removeClass('sticky');
            slider.removeClass('sticky');
            slider.css('top', 'initial');
        }

        // for footer
        if(window.pageYOffset > prevY) {
            if(!footer.hasClass('open')){
                footer.removeClass('close');
                footer.addClass('open');
                addPadding();
            }
        } else if(window.pageYOffset < prevY) {
            if(!footer.hasClass('close')){
                footer.removeClass('open');
                footer.addClass('close');
            }
        }

        // for hiding nav
        if(window.pageYOffset !== prevY && $('#nav-slider').hasClass('open')){
            $('#nav-slider').addClass('close');
            $('#nav-slider').removeClass('open');
        }

        prevY = window.pageYOffset;
    });
}

export default applySticky;