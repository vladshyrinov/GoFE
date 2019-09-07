( function($) {

	$.fn.slider = function(options) {

		var defaults = {
			imageWidth: 100,
		};

		var settings = $.extend(defaults,options);

		var leftMove = $(".carousel-arrow-left");
		var rightMove = $(".carousel-arrow-right");
		var carouselHider = $(".carousel-hider");
		var elementsList = $(".carousel-list");
		var carouselItem = $(".carousel-item");
		var carouselImage = $(".carousel-item img");

		carouselImage.css({
			'max-width': settings.imageWidth + 'px'
		});


		var pixelsOffset = settings.imageWidth + 25;
		var currentLeftValue = 0;
		var elementsCount = elementsList.find('li').length;

		var checkminimumOffset = function() {
			return settings.imageWidth < 150 ? -((elementsCount-5)*pixelsOffset) :
			settings.imageWidth < 250 ? -((elementsCount-4)*pixelsOffset) :  
			settings.imageWidth < 350 ? -((elementsCount-3)*pixelsOffset) :  
			settings.imageWidth < 450 ? -((elementsCount-2)*pixelsOffset) :  
			-((elementsCount-1)*pixelsOffset);  
		};

		var minimumOffset = checkminimumOffset();
		var maximumOffset = 0;

		var checkImageSize = function() {
			return settings.imageWidth < 150 ? (pixelsOffset*5)-25 :
			settings.imageWidth < 250 ? (pixelsOffset*4)-25 :
			settings.imageWidth < 350 ? (pixelsOffset*3)-25 :
			settings.imageWidth < 450 ? (pixelsOffset*2)-25 :
			pixelsOffset-25;
		};

		carouselHider.css({
			'width': checkImageSize() + 'px'
		});

		leftMove.on('click', function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				elementsList.animate({left: currentLeftValue + 'px'}, 500);
			}
		});

		rightMove.on('click', function() {
			if (currentLeftValue != minimumOffset) {
				console.log(currentLeftValue, minimumOffset);
				currentLeftValue -= pixelsOffset;
				elementsList.animate({left: currentLeftValue + 'px'}, 500);
			}
		});

		return this;
	};

})(jQuery);