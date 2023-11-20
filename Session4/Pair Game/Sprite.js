export class Sprite{
    constructor(id){
        this.id = id;
    }
    setSprite(sprite, container){
        this.sprite = sprite;
        let img = document.createElement('img');
        img.src = sprite;
        img.id = this.id;

        img.style.position = 'absolute';
        img.style.border = "2px solid #0000FF"
        document.getElementById(container).appendChild(img);
        this.idSprite = img.id;
    }
    getSprite(){ return this.sprite};

    setSize(width, height){
        this.width = width;
        this.height = height;
        var img = document.getElementById(this.idSprite);
        img.style.width = width.toString()+"px";
        img.style.height = height.toString()+"px";
    }
    getSize(){
        return [this.width, this.height];
    }

    setTranslate(scaleX, scaleY, rotation){
        this.scaleX = scaleX
        this.scaleY = scaleY;
        this.rotation = rotation;
        var img = document.getElementById(this.idSprite);
        img.style.transform = "scale("+this.scaleX+","+this.scaleY+")";
        img.style.transform = "rotation("+this.rotation+")";
    }
    getTranslate(){
        return [this.scaleX,this.scaleY, this.rotation];
    }

    setPosition(x, y){
        this.x = x;
        this.y = y;
        var img = document.getElementById(this.idSprite);
        img.style.left = this.x+"px";
        img.style.top = this.y+"px";
    }
    getPosition(){
        return [this.x, this.y];
    }

    setDefault(){
        this.setTranslate(100,100,1,0);
        this.setPosition(0,0,0);
    }

}