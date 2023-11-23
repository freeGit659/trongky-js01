const jsonFile = require('./readJsonFile.js');

module.exports = {
        writeJson: function(filePath, object){
            const fs = require('fs');
            var objectCurrent = jsonFile.readJsonFile(filePath);
            var dataToWrite = Object.assign(objectCurrent, object);
            const jsonString = JSON.stringify(dataToWrite, null, 2);
            fs.writeFileSync(filePath, jsonString, 'utf8');
        }
}


