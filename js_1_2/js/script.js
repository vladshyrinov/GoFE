'use strict';

	//***************** Use this function if you wanna find the power of the number *********

	function pow(x, n) {
		var result = x;

		if(n==0) {
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

	}

	function toBePowered() {
		var x = prompt("Enter the number to be powered", '');
		var n = prompt("Enter the power", '');

		if (n - (n^0)) {
			alert('The power ' + n +
				' is not accessible, it must be integer');
		} else {
			alert( 'The answer is ' + pow(x, n) );
		}
	}

	//*****************************************************************************************


	//************************** Checking user matching function ********************************

	var arrNames = [];
	var user;

	function setNamesArray(arr) {
		var name;

		for(var i=0; i<5; i++) {
			name = prompt('Please, enter the name number ' + (i+1) + 
				' you wanna add to Names Array', '').toLowerCase();

			arr.push(name);
		}
	}

	function checkUser(arr) {
		user = prompt('Enter the user name to check' + 
			' if you have the access or not').toLowerCase();

		for(var i=0; i<5; i++) {
			if (user===arr[i]) {
				return true;
			}
		}
		return false;
	}

	function computerEnter(arr) {
		setNamesArray(arr);
		if (checkUser(arr)) {
			alert('Hello ' + user + ', your enter is successful');
		} else {
			alert('Error, you are not registered user');
		}
	}

	//****************************************************************************************


	// Functions calls

	computerEnter(arrNames);
	toBePowered();
