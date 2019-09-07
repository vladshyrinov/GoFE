var pow = require('../js/app.js');

var result;

describe('pow function', function() {
	
	it("to be powered", function() {
		result = pow(3,2);
		expect(result).toBe(9);
	});

	it("to be powered in 0 degree", function() {
		result = pow(3,0);
		expect(result).toBe(1);
	});

	it("to be powered in negative degree", function() {
		result = pow(3,-1);
		expect(result).toBe(1/3);
	});

	it("a fractional number to be powered", function() {
		result = pow(0.3,2);
		expect(result).toBe(0.09);
	});

	it("0 to be powered in negative degree", function() {
		result = pow(0,-1);
		expect(result).toBe(Infinity);
	});

});