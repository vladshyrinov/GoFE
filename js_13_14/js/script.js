"use strict";

var testObj = JSON.parse(localStorage.getItem("testStr"));

var body = document.body;
var root = document.getElementById('root').innerHTML;
var tmpl = _.template(root);
var result = tmpl(testObj);

var formBase = document.createElement('div');
body.appendChild(formBase);
formBase.innerHTML = result;

$(function() {
	var input = $('input');

	var result = true;

	var button = $('.btn-info');

	var overlay = $('.overlay');

	var modal = $('.modalByMe');

	var right = $('.right');

	var wrong = $('.wrong');
	
	button.on("click", function(event) {		
		event.preventDefault();
		input.each(function () {
			if ( $(this).prop('checked') != $(this).attr('value') ) {
				result = false;
			}
		});

		result == true ? wrong.addClass('none') : right.addClass('none');

		input.each(function () {
			$(this).prop('checked',false);
		});

		overlay.addClass('overlay-show');
		modal.addClass('modal-show');

		result = true;
	});

	
	overlay.on("click", function () {
		$(this).removeClass('overlay-show');
		modal.removeClass('modal-show');
		wrong.removeClass('none');
		right.removeClass('none');
	});
});