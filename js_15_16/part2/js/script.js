"use strict";

function Human(Name = "Georgiy", Age = 23, Sex = "man", Height = 185, Weight = 80) {
	this.name = Name;
	this.age = Age;
	this.sex = Sex;
	this.height = Height;
	this.weight = Weight;
}

function Worker(WorkPlace = "Rusvelt str.", Salary = 1300) {
	this.workPlace = WorkPlace;
	this.salary = Salary;
	this.work = function() {
		console.log("I start to work");
	};
}

function Student(StudyPlace = "KPI", Schoolarship = 850) {
	this.studyPlace = StudyPlace;
	this.Schoolarship = Schoolarship;
	this.watchSerial = function() {
		console.log("I'm watching the serial");
	};
}

Worker.prototype = new Human();
Student.prototype = new Human();

Student.prototype.age = 12;

var student1 = new Student();


