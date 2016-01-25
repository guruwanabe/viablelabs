/**
 * Created by Bogdan Stanciu on 1/23/2016.
 */

/*
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
(function () {
	'use strict';
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(
				document.createTextNode(
						'@-ms-viewport{width:auto!important}'
				)
		);
		document.querySelector('head').appendChild(msViewportStyle)
	}
})();
/*
 end Hack
 */

(function($){
	//"use strict";
	var url = window.location.href;
	var objInfowindow;
	var objWindow = $(window);

	var app = {
		ready:function(){
			app.viableSimpleCarousel();
		},
		load: function () {

		},
		resize: function (){

		},
		scroll: function (){

		},
		viableSimpleCarousel: function(strId, options) {
			var objCarousel = $('.carousel');
			if(strId){
				objCarousel = $('#'+strId).find(objCarousel);
			}

			$.each(objCarousel, function(){
				var intSlidesToShow = $(this).data('slides-show'),
						intSlidesToScroll = $(this).data('slides-scroll'),
						blnPagination = $(this).data('pagination'),
						blnInfinite = $(this).data('infinite-scroll'),
						blnVertical = $(this).data('vertical'),
						blnCentered = $(this).data('centered'),
						strLazyLoad = $(this).data('lazyload'),

						defaults = {
							dots: blnPagination || false,
							infinite: blnInfinite || false,
							speed: 300,
							lazyLoad: strLazyLoad || false,
							slidesToShow: intSlidesToShow,
							slidesToScroll: intSlidesToScroll,
							vertical: blnVertical || false,
							verticalSwiping: blnVertical || false,
							centerMode: blnCentered || false,
							centerPadding: '80px',
							responsive: [
								{
									breakpoint: 1024,
									settings: {
										slidesToShow: 3,
										slidesToScroll: 3
									}
								},
								{
									breakpoint: 600,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2
									}
								},
								{
									breakpoint: 480,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1
									}
								}
							]
						};
				//console.log(defaults);
				var settings = $.extend(defaults, options);
				$(this).slick(settings);

			});
		}

	};
	$(document).on('ready', app.ready());
	$(document).on('load', app.load());
	$(document).on('resize', app.resize()).resize();
})(jQuery);