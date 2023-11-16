function BombGarden(arr){
    let arrTemp = arr;
    let roadTotal = [];
    let roadResult = [];
            for(let i = 0; i < arrTemp.length; i++){
                let numStep = 0;
                let roadTemp = [];
                for(let j = 0; j < arr[i].length; j++){
                    if(arrTemp[i][j] == 0){
                        roadTemp.push(j);
                        numStep++;
                        //arrTemp[i][j] = 1;
                        //break;
                    }
                }
                roadTotal.push(roadTemp);
            }
        roadResult.push(roadTotal);
    console.log(roadTotal);
    //console.log(FindSafeWay(roadTotal));
}
function FindSafeWay(ways){
    let result = []
    let waysCollect = [];
    for(let i = 0; i < ways.length; i++){
        if(ways[i].length > 1){
            for(let j = 0; j < ways[i].length;i++){
                if(ways[i][j] != -1) waysCollect.push(j)
                ways[i][j] = -1;
                break;
            }
        }
        else waysCollect.push(ways[i]);
    }
    result.push(waysCollect);
    return result;
}
BombGarden([[0,0,1],[0,1,1],[0,1,1],[0,0,1],[0,0,1]]);