const read = require('./readJsonFile.js');
const write = require('./writeJsonFile.js');


console.log('data read:',read.readJsonFile('./data.json'))

const dataToWrite = {
    key7: 'value6',
    key8: 'value7',
};
write.writeJson('./data.json', dataToWrite);