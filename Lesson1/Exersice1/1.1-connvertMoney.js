function formatMoneyString(money) {
    let moneyStr = String(money);
    let indexDot = moneyStr.indexOf(".");
    let integerMoneyArr = moneyStr.split("").slice(0, indexDot);
    let decimalMoneyArr = moneyStr.split("").slice(indexDot, moneyStr.length);
    let numDot = 0;
    for (let i = integerMoneyArr.length-1; i > 0; i--){
            if((integerMoneyArr.length-numDot-i)%3 === 0) {
                integerMoneyArr.splice(i,0,",");
                numDot++;
            }
    }
    let result = integerMoneyArr.concat(decimalMoneyArr).join("");
    return result;
}
console.log(formatMoneyString(100.09));
console.log(formatMoneyString(3429483948394242.34040343));
console.log(formatMoneyString(10));