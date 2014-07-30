'use strict';

var expect = require('chai').expect;
var pdfParser = require('../vpnPDFParser');
var testFile = __dirname + '/test.pdf';

describe('vpncard', function() {
	it('should parse pdf correctly', function(done){
		var secret = {};
		pdfParser(testFile, 'a1a1a1', function(err, secret) {
			expect(secret).to.be.a('object');
			expect(secret['A'][0]).to.equal('A1');
			expect(secret['J'][4]).to.equal('J5');
			done();
		});
	});
	it('should output correct code', function(done) {
		pdfParser(testFile, 'a1b1C1', function(err, secret, result) {
			if (err) throw err;
			expect(result).to.equal('A1B1C1');
			done();
		});
	});
});
	
