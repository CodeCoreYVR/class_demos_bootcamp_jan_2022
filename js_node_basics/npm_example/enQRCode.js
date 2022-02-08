const QRCode = require("qrcode");

const content = process.argv[2];


QRCode.toDataURL(content, function (err, url) {
    console.log(url)
})
