export class Sprite {
    constructor(id) {
        this.id = id;
    }
    setSprite(sprite, container) {
        this.sprite = sprite;
        let img = document.createElement('img');
        img.src = sprite;
        img.id = this.id;

        img.style.position = 'absolute';
        img.style.border = "2px solid #0000FF"
        document.getElementById(container).appendChild(img);
        this.idSprite = img.id;
    }
    getSprite() { return this.sprite };

    setSize(width, height) {
        this.width = width;
        this.height = height;
        var img = document.getElementById(this.idSprite);
        img.style.width = width.toString() + "px";
        img.style.height = height.toString() + "px";
    }
    getSize() {
        return [this.width, this.height];
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        var img = document.getElementById(this.idSprite);
        img.style.left = this.x + "px";
        img.style.top = this.y + "px";
    }
    getPosition() {
        return [this.x, this.y];
    }

    get scaleX() {return this.scaleX}

    set scaleX(scale) {
        this._scaleX = scale;
        var img = document.getElementById(this.idSprite);
        img.style.transform = `scaleX(` + scale + ")";
    }

}