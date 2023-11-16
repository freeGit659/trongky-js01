function formatMoneyShorten(money){
    var shortKey = ["","K", "M", "B","T"];
    let shortMoneyString;
    for (let i= shortKey.length; i >=0; i--){
        if(money/ Math.pow(10, i*3) >=1) {
            shortMoneyString = ((money/ Math.pow(10, i*3))).toFixed(2) + shortKey[i]; 
            break;
        }
    }
    return shortMoneyString;
}
console.log(formatMoneyShorten(1000));
console.log(formatMoneyShorten(2340500600));
console.log(formatMoneyShorten(123_456_000_000_000));