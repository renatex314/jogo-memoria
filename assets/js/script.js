let cardsList = populateCardsTable(3, 6);
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
    if (lockBoard || this == firstCard) return;
    
    visualFlipCard(this);
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if (firstCard.dataset.word === secondCard.dataset.word) {
        disableCards();
        return;      
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', () => visualFlipCard(firstCard));
    secondCard.removeEventListener('click', () => visualFlipCard(secondCard));

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        visualUnflipCard(firstCard);
        visualUnflipCard(secondCard);

        resetBoard();
    }, 1000);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cardsList.forEach(card => card.addEventListener('click', flipCard));