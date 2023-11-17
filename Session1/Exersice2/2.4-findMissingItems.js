function checkingMatch(arr1, arr2){
    let result = [];
    for (let i = 0; i < arr1.length;i++ ){
        let temp = false;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                temp = true;
                break;
            }
        }
        if(!temp) result.push(arr1[i]);
    }
    return result;
}
console.log(checkingMatch([1,2,3,4,5], [3,5]));
console.log(checkingMatch([1,2,3,4,5], []));