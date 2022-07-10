var populateCardsTable;

(function(){
    let cardsTable = document.getElementById('cards-table');

    function createCardElement(word) {
        let cardElement = document.createElement('div');
        cardElement.dataset.word = word;
        cardElement.classList.add('card-wrapper');
        cardElement.innerHTML = `<div class="card" data-word=${word}></div>`;

        return cardElement;
    }

    function createCardList(rows, columns){
        if (rows * columns % 2 === 1) throw new Error('linhas ou colunas precisam ser par !');

        let list = [];
        let pairsNumber = (rows * columns) / 2;
        let lastChar = 'a'.charCodeAt(0);

        for (var i = 0; i < pairsNumber; i++) {
            const card1 = createCardElement(String.fromCharCode(lastChar));
            const card2 = createCardElement(String.fromCharCode(lastChar));
            list.push(card1, card2);
            lastChar++;
        }

        return list;
    }

    function getRandomIndex(length) {
        return parseInt(Math.random() * length);
    }

    function populateCards(rows, columns){
        let cardsListTmp = createCardList(rows, columns);
        let cardsList = cardsListTmp.clone();

        for (var i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            for (var j = 0; j < columns; j++) {
                let td = document.createElement('td');
                let card = cardsListTmp.removeAtIndex(getRandomIndex(cardsListTmp.length));

                td.appendChild(card);
                tr.appendChild(td);
            }
            
            cardsTable.appendChild(tr);
        }

        return cardsList;
    }

    populateCardsTable = populateCards;
})();