"use strict";

function pow(x, n) {
	var result = x;

	if(n===0) {
		return 1;

	} else if(n<0) {
		result = 1;

		for(var i=0; i<-n; i++) {
			result /= x;
		}

		return result;

	} else {

		for(var i=1; i<n; i++) {
			result *= x;
		}

		return result;
	}

};

try {
	module.exports = pow;
} catch(e) {}
