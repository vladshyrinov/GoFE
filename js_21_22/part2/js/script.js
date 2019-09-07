"use strict";

const testObj = JSON.parse(localStorage.getItem("testStr"));

const body = document.body;
const root = document.getElementById('root').innerHTML;
const tmpl = _.template(root);
const result = tmpl(testObj);

const formBase = document.createElement('div');
body.appendChild(formBase);
formBase.innerHTML = result;

$(() => {
	const input = $('input');

	let result = true;

	const button = $('.btn-info');

	const overlay = $('.overlay');

	const modal = $('.modalByMe');

	const right = $('.right');

	const wrong = $('.wrong');
	
	button.on("click", (event) => {		
		event.preventDefault();
		input.each(() => {
			if ( $(this).prop('checked') != $(this).attr('value') ) {
				result = false;
			}
		});

		result == true ? wrong.addClass('none') : right.addClass('none');

		input.each(() => {
			$(this).prop('checked',false);
		});

		overlay.addClass('overlay-show');
		modal.addClass('modal-show');

		result = true;
	});

	
	overlay.on("click", () => {
		$(this).removeClass('overlay-show');
		modal.removeClass('modal-show');
		wrong.removeClass('none');
		right.removeClass('none');
	});
});