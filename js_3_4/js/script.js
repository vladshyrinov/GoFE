var testGen = {
	body: document.querySelector('body'),
	form: null,
	list: null,
	question: null,
	createDiv: function(parent) {
		var div = document.createElement('div');
		div.classList.add('col-md-4');
		parent.appendChild(div);
	},
	createForm: function(parent) {
		this.form = document.createElement('form');
		this.form.setAttribute('action','post');
		parent.appendChild(this.form);
	},
	createHeading: function(text) {
		var heading = document.createElement('h1');
		heading.innerHTML = text;
		heading.style.fontSize = '24px';
		heading.style.letterSpacing = '-0.8px';
		this.form.appendChild(heading);
	},
	createButton: function(text) {
		var button = document.createElement('button');
		button.innerHTML = text;
		button.setAttribute('type','submit');
		button.classList.add('btn');
		button.classList.add('btn-info');
		button.style.marginLeft="20px";
		this.form.appendChild(button);
	},
	createList: function() {
		this.list = document.createElement('ol');
		this.form.appendChild(this.list);
	},
	createQuestion: function(text) {
		this.question = document.createElement('li');
		this.question.innerHTML = text;
		this.list.appendChild(this.question);
	},
	createAnswer: function(text) {
		var answer = document.createElement('label');
		var check = document.createElement('input');
		check.setAttribute('type','checkbox');
		var textNode = document.createTextNode(text);
		this.question.appendChild(answer); 
		answer.appendChild(check); 
		answer.appendChild(textNode); 
	},
	createBreak: function(parent) {
		var br = document.createElement('br');
		parent.appendChild(br);
	}
};

var body = testGen.body;
var grid, questionNumber, answerNumber;
grid = questionNumber = answerNumber = 3;
var i, j;

for(i=0; i<grid; i++) {
	testGen.createDiv(body);
}
testGen.createForm(document.querySelectorAll('div')[1]);
testGen.createHeading('Тест по программированию');
testGen.createList();
for (i=0; i<questionNumber; i++) {
	testGen.createQuestion('Вопрос №'+(i+1));
	testGen.createBreak(testGen.question);
	for (j=0; j<answerNumber; j++) {
		testGen.createAnswer('Вариант ответа №'+(j+1));
		testGen.createBreak(testGen.question);
	}
}
testGen.createButton('Проверить мои результаты');









