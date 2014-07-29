var fs = require('fs'),
    PDFParser = require("./node_modules/pdf2json/pdfparser.js");

module.exports = function(pdfFilePath, code, cb) {
    function _onPFBinDataReady(data) {
        var secret = data.data.Pages[0].Texts.map(function(dingus) {
            return decodeURI(dingus.R[0].T).trim();
        })

        var serial = secret.pop().replace('Serial %23 ', '');
        var keys = secret.slice(0, 10);

        var secrets = {};
        secret = secret.slice(10).filter(function(el) {
            return el.length !== 1;
        });

        for (var i in secret) {
            var key = keys[i % 10];

            if (!secrets[key]) {
                secrets[key] = [];
            }

            secrets[key].push(secret[i])
        }

        // Split code into 3 separate VPN grid codes
    	var splitCode = code.match(/(.{2})(.{2})(.{2})/).splice(1);

        // Get result code from secret has and join to string
	    cb(undefined, splitCode.map(function(v) {
	        var temp = v.toUpperCase().split('');
	        return secrets[temp[0]][temp[1] - 1];
	    }).join(''));

    }

    var pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataReady", _onPFBinDataReady);

    fs.readFile(pdfFilePath, function(err, pdfBuffer) {
        if (!err) {
            pdfParser.parseBuffer(pdfBuffer);
        } else {
            return cb(err)
        }
    });
}
