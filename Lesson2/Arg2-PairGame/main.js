var cardColor = {
    black: "#000000",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    pink: "#FF00FF",
    sliver: "#A9A9A9",
    redBlack: "#800000",
    brown: "#8B4513",
    blueBlack: "#191970"
}
var cardRandom = { black: 0, red: 0, green: 0, blue: 0, yellow: 0, pink: 0, sliver: 0, redBlack: 0, brown: 0, blueBlack: 0 }
createBlock(20);
createCoverBlock(20);
var colorTemp = null;
function block(){
    var p = document.getElementsByClassName("block");
    for(let element = 0; element < p.length; element++) {
        p[element].style.width = "50px";
        p[element].style.height = "50px";
        p[element].style.color = "#000";
        p[element].style.borderRadius = "5px";
        p[element].style.border = "2px solid #dadada"
    }
}block();
function blockCover(){
    var p = document.getElementsByClassName("blockCover");
    for(let element = 0; element < p.length; element++) {
        p[element].style.width = "50px";
        p[element].style.height = "50px";
        p[element].style.color = "#000";
        p[element].style.borderRadius = "5px";
        p[element].style.border = "2px solid #dadada"
        p[element].addEventListener("click", event => {
            if (logic(p[element].value)) p[element].style.opacity = "0";
            else {
                    p[element].style.opacity = "0";
                    setTimeout(function (){
                p[element].style.opacity = "1";
            },2000);
            }
            console.log("choice: ", p[element].value);
            console.log(logic(p[element].value));
            });
    }
}blockCover();
function createBlock(num){
    for(let i = 1; i <= num; i++){
        var div = document.createElement("div");
        div.classList.add("block");
        div.style.fontSize = "20px";
        div.style.textAlign = "center";
        div.style.background = createColorCard();
        var p = document.getElementById('container');
        p.appendChild(div);

        var divCover = document.createElement("div");
        divCover.classList.add("blockCover");
        divCover.innerText = i.toString();
        divCover.style.fontSize = "20px";
        divCover.style.textAlign = "center";
        divCover.style.background = "#fff"
        divCover.value = RGBToHex(div.style.background);
        var pCover = document.getElementById('coverContainer');
        pCover.appendChild(divCover);
    }
}

function createCoverBlock(num){
    for(let i = 1; i <= num; i++){

    }
}
function createColorCard(){
    while(Object.keys(cardColor).length > 0){
    var keys = Object.keys(cardColor);
    var keyCardRandom = keys[Math.floor(Math.random() * keys.length)];
    if (cardRandom[keyCardRandom] < 2)  {
        cardRandom[keyCardRandom] += 1;
        return cardColor[keyCardRandom];
    }
    delete cardColor[keyCardRandom];
    delete cardRandom[keyCardRandom];
    }
}

function logic(color){
    console.log("temp: ",colorTemp);
    if (colorTemp === null) {
        colorTemp = color;
        return true;
    }
    if (colorTemp === color) {
        colorTemp = null;
        return true;
    }
    else {
        colorTemp = null;
        return false;
    }
}
function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }