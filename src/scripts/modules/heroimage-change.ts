const listImage = [
    $('#hero-image_1'),
    $('#hero-image_2'),
    $('#hero-image_3')
];

const listText = [
    $('#text-hero_1'),
    $('#text-hero_2'),
    $('#text-hero_3')
];

let currentIndex: number = 0
let currentTextIndex: number = 0;

const applyChanging = () => {
    setTimeout(() => {
        console.log('change image');
        listImage[currentIndex++].fadeOut('slow', () => {

            if(currentIndex >= listImage.length) currentIndex = 0;
            listImage[currentIndex].fadeIn('slow', () => {
                applyChanging();
            });
        });

        listText[currentTextIndex++].fadeOut('slow', () => {
            if(currentTextIndex >= listText.length) currentTextIndex = 0;
            listText[currentTextIndex].fadeIn('slow');
        })
    }, 5000);
}

export default applyChanging;