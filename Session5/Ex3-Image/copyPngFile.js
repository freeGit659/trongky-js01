var fs = require('fs');
var path = require("path");

copyPngFileToNewFolder('./basics',"./NewFolder")

function copyPngFileToNewFolder(filePath, folder){
    let data = fs.readdirSync(filePath);
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(fs.statSync(filePathChild).isFile()) {
            if(checkImage(filePathChild)) copyFile(filePathChild, folder+"/"+element) ;
        }
        else copyPngFileToNewFolder(filePathChild, folder);
    });
}

function checkFile(filePath){
    return fs.statSync(filePath).isFile();
}

function checkImage(filePath){
    let extNameImage = ".png";
        if(extNameImage == path.extname(filePath)) return true;
        return false;
}

function copyFile(files, filePath){
    fs.copyFileSync(files,filePath);
}