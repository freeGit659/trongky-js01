const copy = require('./copyPngFile.js');
const resize = require('./resizeImage.js');
const search = require('./searchImage.js');

const pathTest = './basics';

copy.copyPng(pathTest,'./NewFolder');

resize.resizeAllImage(pathTest, 0.7);

console.log(search.showImage(pathTest));

