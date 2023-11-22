var fs = require('fs');
var path = require("path");
const sharp = require('sharp');

resizeImage('./basics')

function resizeImage(filePath){
    let data = fs.readdirSync(filePath);
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(fs.statSync(filePathChild).isFile()) {
            if(checkImage(filePathChild)) resize(filePathChild,'./ImageReSize70Percent/'+element);
        }
        else resizeImage(filePathChild);
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

function resize(filePath,destinationImagePath){
    sharp(filePath)
    .metadata()
    .then(metadata => {
        const newWidth = Math.round(metadata.width * 0.7);
        const newHeight = Math.round(metadata.height * 0.7);
        sharp(filePath)
        .resize(newWidth, newHeight)
        .png({ compressionLevel: 9, force: false })
        .toFile(destinationImagePath, (err, info) => {
            if (err) {
            console.error(err);
            } else {
            console.log(info);
            console.log('Ảnh đã được thay đổi kích thước thành công!');
            }
        });
    })
    .catch(err => {
        console.error(err);
    });
}

