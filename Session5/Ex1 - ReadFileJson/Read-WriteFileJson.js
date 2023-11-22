console.log(readJsonFile('./data.json'))

const dataToWrite = {
    key5: 'value3',
    key6: 'value4',
};
writeJson('./data.json', dataToWrite);


function readJsonFile(filePath){
    const fs = require('fs');
    const data = fs.readFileSync(filePath);
    const jsonObject = JSON.parse(data, 'utf8');
    return jsonObject;
}

function writeJson(filePath, object){
    const fs = require('fs');
    var objectCurrent = readJsonFile(filePath);
    var dataToWrite = Object.assign(objectCurrent, object);
    const jsonString = JSON.stringify(dataToWrite, null, 2);
    fs.writeFileSync(filePath, jsonString, 'utf8');
}

