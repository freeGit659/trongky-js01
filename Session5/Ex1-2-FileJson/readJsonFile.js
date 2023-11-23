module.exports = {
    readJsonFile :function(filePath){
            const fs = require('fs');
            const data = fs.readFileSync(filePath);
            const jsonObject = JSON.parse(data, 'utf8');
            return jsonObject;
        }
}


