var fs = require('fs');
var path = require("path");
const sharp = require('sharp');

const search = require("./searchImage.js");

module.exports = {
    resizeAllImage : resizeAllImage,
}

function resizeAllImage(filePath, _scale){
    let data = fs.readdirSync(filePath);
    let scale = _scale;
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(search.checkFile(filePathChild)) {
            if(search.checkImage(filePathChild)) resizeImage(filePathChild, scale);
        }
        else resizeAllImage(filePathChild, scale);
    });
}

function resizeImage(filePath, scale){
    sharp(filePath)
    .metadata()
    .then(metadata => {
        const newWidth = Math.round(metadata.width * scale);
        const newHeight = Math.round(metadata.height * scale);
        sharp(filePath)
        .resize(newWidth, newHeight)
        .png({ compressionLevel: 9, force: false }).toBuffer().then(buffer=>{
            sharp(buffer).toFile(filePath, (err, info) => {
                if (err) {
                console.error(err);
                } else {
                console.log(info);
                console.log('Ảnh đã được thay đổi kích thước thành công!');
                }
            });
        })
    })
    .catch(err => {
        console.error(err);
    });
}

