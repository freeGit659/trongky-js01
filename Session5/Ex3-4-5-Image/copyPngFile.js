var fs = require('fs');
var path = require("path");

const search = require("./searchImage.js");

module.exports = {
    copyPng : copyPng,
    }

function copyPng(filePath, folder){
    let data = fs.readdirSync(filePath);
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(search.checkFile(filePathChild)) {
            if(search.checkImage(filePathChild)) copyFile(filePathChild, folder+"/"+element) ;
        }
        else copyPng(filePathChild, folder);
    });
}

function copyFile(files, filePath){
    fs.copyFileSync(files,filePath);
}

