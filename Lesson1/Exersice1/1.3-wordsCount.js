function countHowManyWord(stringI){
    if(stringI == "") return 0;
    let result = 0;
    stringI.split("").forEach(element => {
        let asciiElement = element.charCodeAt();
        if(result == 0 && asciiElement >=97 && asciiElement <=122) result = 1;
        if(asciiElement>= 64 && asciiElement <= 90 ) result++;
    });
    return result;
}
console.log(countHowManyWord("oneTwoThree"));
console.log(countHowManyWord("TwoThree"));
console.log(countHowManyWord("oneTwoThreeForFineSick"));
console.log(countHowManyWord("TwoForFineSick"));