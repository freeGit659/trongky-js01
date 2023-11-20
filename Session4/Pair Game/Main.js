import {Node} from "./Node.js"

var cards = [];
shuffleCard(5);
spawnCard(10);
function shuffleCard(num){
    for(let i = 1; i <= num; i++){
        cards.push("./img/card"+i+".png");
        cards.push("./img/card"+i+".png");
    }
    console.log(cards);
}

function spawnCard(num){
    let cardTemp = cards;
    let numberColum = 0; 
    let y = 0;
    for(let i = 1; i <= num ;i ++){
        let card = new Node();
        if(numberColum > 5){
            numberColum = 0;
            y += 200;
        }
        card.createCard(cardTemp[0], 200, 200, i*200, y, 1, 1, 0);
        cardTemp.shift();
    }
}