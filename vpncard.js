#!/usr/bin/env node

var pdfParser = require('./vpnPDFParser.js')

// Get 1 or more arguments. Can be in form A1A1A1 or A1 A1 A1
var code = process.argv.splice(3).join('');
if (!code.match(/([a-zA-Z][\d]){3}/)) return console.error('Invalid VPN Code');

pdfParser(process.argv[2], code, function(err, secrets, result) {
    if (err) return console.error(err);
    console.log(result);
});
