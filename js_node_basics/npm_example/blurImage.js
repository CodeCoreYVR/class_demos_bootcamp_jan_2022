const jimp = require("jimp");
const fileName = process.argv[2];
const blurNumber = parseInt(process.argv[3]);

console.log(fileName)

jimp.read(fileName, (err, image) => {
    image.blur(blurNumber).write('changed.png');
});