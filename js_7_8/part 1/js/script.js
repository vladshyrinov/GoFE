$(function(){
	var tabs = $('#tabs a');
	var content = $('.tabs-content > div');

	var tab = function (tabs, content) {
		$(content).hide();
		var id = $(tabs[0]).attr('href');
		$(id).show();
		$(tabs[0]).addClass('active');
		$(tabs).on('click', function(e){   
			e.preventDefault();
			$(content).hide();
			$(tabs).removeClass('active');
			$(this).addClass('active');
			id = $(this).attr('href');  
			$(id).show();
		});
	};

	tab(tabs,content);
});
