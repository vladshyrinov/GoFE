function Timer () {
	var self = this;
	self.timerArea = document.querySelector('.timer');
	self.ms = 0;
	self.sec = 0;
	self.min = 0;
	self.hours = 0;
	self.timeCount = null;
	self._zeroAdd = function(time) {
		time = +time;
		time = time < 10 ? '0' + time : time;
		return time;
	};
	self._zeroAddMs = function(time) {
		time = +time;
		time = time < 10 ? '0' + '0' + time : 
		time < 100 ? '0' + time : time;
		return time;
	};
	self._showTime = function() {
		self.hours = self._zeroAdd(self.hours);
		self.min = self._zeroAdd(self.min);
		self.sec = self._zeroAdd(self.sec);
		self.ms = self._zeroAddMs(self.ms);
		self.timerArea.innerText = self.hours + ':' + self.min +
		':' + self.sec + ':' + self.ms;
	};
	self._timing = function() {
		self.ms+=4;
		if(self.ms===1000) {
			self.ms=0;
			self.sec++;
			if(self.sec===60) {
				self.sec = 0;
				self.min++;
				if(self.min===60) {
					self.min = 0;
					self.hours++;
				}
			}
		}
		self._showTime();
	};
	self.timerCall = function() {
		self.timeCount = setInterval(self._timing,4);
	};
	self.timerPause = function() {
		clearInterval(self.timeCount);
	};
	self.timerClear = function() {
		clearInterval(self.timeCount);
		self.ms = self.sec = self.min = self.hours = 0;
		self._showTime(); 
	};
}

var myTimer = new Timer();

var control = document.querySelector('.start');
var clear = document.querySelector('.clear');
var split = document.querySelector('.split');
var results = document.querySelector('.results');

control.addEventListener('click', function() {
	var child = control.children[0];
	if(control.classList[0] === 'start') {
		control.classList.remove('start');
		control.classList.add('pause');
		child.classList.add('btn-info');
		child.innerText = "Pause";
		myTimer.timerCall();
	} else if(control.classList[0] === 'continue') {
		control.classList.remove('continue');
		control.classList.add('pause');
		child.classList.add('btn-info');
		child.innerText = "Pause";
		myTimer.timerCall();
	} else if(control.classList[0] === 'pause') {
		control.classList.remove('pause');
		control.classList.add('continue');
		child.classList.remove('btn-info');
		child.innerText = "Continue";
		var p = document.createElement('p');
		p.innerText = myTimer.hours + ':' + myTimer.min +
		':' + myTimer.sec + ':' + myTimer.ms; 
		results.appendChild(p);
		myTimer.timerPause();
	}
});

split.addEventListener('click', function(){
	var p = document.createElement('p');
	p.innerText = myTimer.hours + ':' + myTimer.min +
	':' + myTimer.sec + ':' + myTimer.ms;  
	results.appendChild(p);
});

clear.addEventListener('click', function() {
	var child = control.children[0];
	control.classList.add('start');
	control.classList.remove('pause');
	control.classList.remove('continue');
	child.classList.remove('btn-info');
	child.innerText = "Start";
	while (results.firstChild) {
		results.removeChild(results.firstChild);
	}
	myTimer.timerClear();
});













