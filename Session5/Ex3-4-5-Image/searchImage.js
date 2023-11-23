var fs = require('fs');
var path = require("path");

var imageFile = [];

module.exports = {
    showImage : showImage,
    checkFile : checkFile,
    checkImage : checkImage
}

function showImage(filePath){
    searchImageFromFolder(filePath)
    return imageFile;
}

function searchImageFromFolder(filePath){
    let data = fs.readdirSync(filePath);
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(fs.statSync(filePathChild).isFile()) {
            if(checkImage(filePathChild)) imageFile.push(filePathChild) ;
        }
        else searchImageFromFolder(filePathChild);
    });
}

function checkFile(filePath){
    return fs.statSync(filePath).isFile();
}

function checkImage(filePath){
    let extNameImage = [".jpeg",".jpg",".png",".gif",".tiff",".psd",".pdf",".eps",".ai",".indd",".raw"];
        if(extNameImage.includes(path.extname(filePath))) return true;
        return false;
}
