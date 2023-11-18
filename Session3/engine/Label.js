export class Label{
    constructor(t){
    }
    get text(){ return this.text;}
    set text(value){
        this.text = value;
        var element = document.createElement("div");
        element.classList.add = "text";
        element.innerText = value;
        console.log(value);
    }
}

// this.x = x;
// this.y = y;
// this.width = width;
// this.height = height;
// this.scaleX = scaleX;
// this.scaleY = scaleY;
// this.active = active;