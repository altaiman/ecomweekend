$(function(){

	// Slider
	$('.slider__slides').slick({
		prevArrow: $('.slider__arrow_prev'),
		nextArrow: $('.slider__arrow_next'),
		fade: true,
		dots: true,
		autoplay: 3000,
		pauseOnHover: false
	});

	// Gallery
	function tabWork(tab) {
		tab = tab || $('.gallery__tabs .tab').first();

		var index = $(tab).index(),
			activeGallery = $('.gallery__photos_active');

		$('.gallery__tabs .tab_active').removeClass('tab_active');
		$(tab).addClass('tab_active');

		$(activeGallery).removeClass('gallery__photos_active');

		$('.gallery__photos[data-tab="'+index+'"]').addClass('gallery__photos_active');
		
	}

	tabWork();

	$('.gallery__tabs .tab').on('click', function(e) {
		e.preventDefault();
		tabWork(this);
	});


	$('.gallery__photos').each(function(i, gallery) {
		var photos = $(gallery).children().length,
			delay;

		$(gallery).find('.photo').each(function(i, photo) {
			delay = ++i/photos;
			$(photo).css('transition-delay', delay+'s')
		})
	});

	$('.photo').on('click', function(e) {
		var img = $(this).find('img').get(0).src;

		$.fancybox.open({
			src: img
		});
	});

	//

	function stickyContainer() {
		$('.day__date').each(function(i, date) {
			$(date).attr('data-sticky-container', '');
			$(date).find('.day__date-wrap').attr('data-sticky-class', 'move')
		});
	}

	stickyContainer();

	var sticky = new Sticky('.day__date-wrap');

	$('.link_tag').on('click', function(e){
	    e.preventDefault();

	    try {
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
	    } catch (e) {
	    	location.href = '/'
	    }
	}); 

	$('.members__tabs .tab').on('click', function(e) {
		e.preventDefault();

		$('.members__tabs .tab.tab_active').removeClass('tab_active');
		$(this).addClass('tab_active');

		var group = $(this).data('group');

		$('.member').hide();
		$('.member').each(function(i, mem) {
			var g = $(mem).data('group');

			if (group === 0) {
				$(mem).finish().fadeIn(Number(i+'00'));
			}
			
			if (g.length > 1) {
				var l = g.length;

				g = g.split(',');

				if (g.indexOf(String(group)) >= 0) {
					$(mem).finish().fadeIn(Number(i+'00'));
				} else return
			} else if (g === group) {
				$(mem).finish().fadeIn(Number(i+'00'));
			} else return;

		});
	})

	$('.members__tabs .tab').first().trigger('click');

});