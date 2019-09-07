$(function(){
	var inputs = $('input');


	var tooltip = function(elems) {
		var parent;
		var div;
		$(elems).hover (
			function (e, title, id) {
				title = $(this).attr('title');
				id = $(this).parent().attr('id');
				parent = $("#" + id);
				div = "<div class='help'>" + title + "</div>";
				$(parent).append(div);
				div = $('.help');
			},
			function (e) {
				$(div).remove();
			}
			);
	};

	tooltip(inputs);



});

