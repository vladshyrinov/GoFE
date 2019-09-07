$(function() {
	$('#featured').orbit({
		'bullets': true,
		'timer' : false,
		'animation' : 'horizontal-slide'
	});

	var sign = $(".sign");
	var acca = $(".acca");
	sign.on("click",function() {
		if(this.getAttribute("on")!="true") {
			sign.parents(".accor_panel").children("p").hide(1000);
			sign.attr("on","false");
			sign.addClass("sign").removeClass("sign2");
			acca.removeClass("acca2");
			$(this).parents(".accor_panel").children("p").show(1000);
			$(this).attr("on","true").removeClass("sign").addClass("sign2");
			$(this).next().addClass("acca2");
		}
		else {
			$(this).attr("on","false").removeClass("sign2").addClass("sign");
			sign.addClass("sign").removeClass("sign2");
			$(this).parents(".accor_panel").children("p").hide(1000);
			$(this).next().removeClass("acca2");
		}
	});
});