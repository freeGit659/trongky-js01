function getExtensionFile(fileName){
    let indexDot = fileName.indexOf(".");
    return fileName.slice(indexDot+1, fileName.length);
}
console.log(getExtensionFile("audio.mp3"))
console.log(getExtensionFile("java.js"))
