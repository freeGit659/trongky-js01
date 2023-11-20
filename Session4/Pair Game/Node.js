import {Sprite} from "./Sprite.js";

export class Node{
    constructor(){
    }
    createCard(src, width, height, x, y, scaleX, scaleY, rotation ){
        var card = new Sprite()
        card.setSprite(src);
        card.setSize(width,height);
        card.setPosition(x,y);
        card.setTranslate(scaleX, scaleY,rotation);
    }

}
