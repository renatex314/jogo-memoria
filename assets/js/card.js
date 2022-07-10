var visualFlipCard, visualUnflipCard;

(function(){
    function flip(cardWrapper) {
        cardWrapper.getElementsByClassName('card')[0].classList.add('flipped');
    }

    function unflip(cardWrapper) {
        cardWrapper.getElementsByClassName('card')[0].classList.remove('flipped');
    }

    visualFlipCard = flip;
    visualUnflipCard = unflip;
})();