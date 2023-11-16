function ElementRandomArray(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
console.log(ElementRandomArray(["A","B","C"]));