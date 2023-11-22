var fs = require('fs');
var path = require("path");
var sharp = require('sharp');

//resizeImage('./basics')
resize('./basics/tilingsky.jpg','./NewFolder/tilingsky.jpg');

function resizeImage(filePath){
    let data = fs.readdirSync(filePath);
    data.forEach(element => {
        let filePathChild = filePath+"/"+element;
        if(fs.statSync(filePathChild).isFile()) {
            if(checkImage(filePathChild)) resize(filePathChild);
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
    var width, height;
    const image = sharp(filePath);
    image
        .metadata()
        .then(function(metadata) {
            return image
            .resize(metadata.width*70/100)
            .toFile(destinationImagePath, (err) => {
                if (err) {
                    console.error('Đã xảy ra lỗi khi thay đổi kích thước ảnh:', err);
                } else {
                    console.log('Kích thước ảnh đã được thay đổi thành công.');
                }
        })
    });
}

