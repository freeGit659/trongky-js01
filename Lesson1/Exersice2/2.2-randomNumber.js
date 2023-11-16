function Random(min, max){
    return Math.floor(Math.random()*(max+1)) + min;
}
console.log(Random(0,0));
console.log(Random(0,6));
console.log(Random(100,2000));
console.log(Random(1,342));