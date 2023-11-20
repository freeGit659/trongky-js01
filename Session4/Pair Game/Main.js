import {Node} from "./Node.js"

var cards = [];

shuffleCard(10);
spawnCard(20);

function shuffleCard(num){
    for(let i = 1; i <= num; i++){
        cards.push("./img/card"+i+".png");
        cards.push("./img/card"+i+".png");
    }
    //console.log(cards);
}

function spawnCard(num){
    let cardTemp = cards;
    let numberColum = 0; 
    let x = 0;
    let y = 0;
    let card = new Node('main');
    card.setPosition(400,100);
    for(let i = 1; i <= num ;i ++){

        if(numberColum >=5){
            numberColum = 0;
            x = 0;
            y += 200;
        }
        numberColum++;
        card.createCard("card"+i,cardTemp[0], 200, 200, x, y, 1, 1, 0);
        console.log(x,y);
        x +=200;
        cardTemp.shift();
  
    }
}