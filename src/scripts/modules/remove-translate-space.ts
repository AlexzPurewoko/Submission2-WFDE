const applyRemoveSpaceAfterTranslate = () => {
    const removeSpaceAfterTranslate = () => {

        const height: number = $('#image__hero_main').height();
        if(height < 1){
            setTimeout(removeSpaceAfterTranslate, 100);
            return;
        }
        $('section.hero').css('height', `${height}px`);
    }
    $(window).on('resize', () => removeSpaceAfterTranslate() );
    removeSpaceAfterTranslate();
};

export default applyRemoveSpaceAfterTranslate;