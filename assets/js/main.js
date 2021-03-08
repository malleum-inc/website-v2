(function($) {
"use strict";


/*-------------------------------------------
  js wow
--------------------------------------------- */
 new WOW().init();
/*-------------------------------------------
  js scrollup
--------------------------------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 
/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
jQuery(".main-menu").meanmenu();

// search box active
$('.search-area a').on('click', function () {
	$('.menu-right .search-area .search-form').toggleClass('active');
	return false;
});	
$('.menu-bar a').on('click', function () {
	$('.slide-menu-area').addClass('highlight');
	return false;
});	
$('.slide-menu-area .close').on('click', function () {
	$('.slide-menu-area').removeClass('highlight');
	return false;
});	
	
/*-------------------------------------------
    isotope activation 
--------------------------------------------- */
//=================
$('container').imagesLoaded(function () {
	// filter items on button click
	$('.filtering-button').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
    });
    $('.filtering-button').on('click', 'a', function () {
        $('.filtering-button a').removeClass('active');
        $(this).addClass('active');
    });
	var $grid = $('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		animationOptions: {
			duration: 500,
			easing: 'zoom-in'
		},
		masonry: {
			// use element for option
			columnWidth: '.grid-item'
		},
		transitionDuration: '.9s'
	})
});

/*-------------------------------------------
testimonial-slide
--------------------------------------------- */
$(".testimonial-slide").owlCarousel({
	autoPlay: true, 
	slideSpeed:2000,
	pagination:true,
	navigation:false,	  
	items : 2,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [980,2],
	itemsTablet: [768,1],
	itemsMobile : [479,1],
}); 
/*-------------------------------------------
testimonial-slide
--------------------------------------------- */
$(".ct-grid-portfolio-layout2").owlCarousel({
    center: false,
    items:3,
    loop:true,
    padding:50,
    responsive:{
        600:{
            items:4
        }
    }
});
/*-------------------------------------------
Sticky Header
--------------------------------------------- */
$(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}); 
/*-------------------------------------------
Counter up activation
--------------------------------------------- */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/*-------------------------------------------
popup-youtube
--------------------------------------------- */
if ($('.popup-youtube').length > 0) {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
}
/*----- cart-plus-minus-button -----*/
$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function () {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find("input").val(newVal);
});
/*-------------------------------------------
google map
--------------------------------------------- */
if ($('#gmap').length > 0) {
	new GMaps({
		div: '#gmap',
		lat: 23.7947172, // 23.7947172,90.3971412
		lng: 90.3971412,
		scrollwheel: false,				
		styles: [
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			}
		]
	}).addMarker({
		lat: 23.792930, //23.792930, 90.403798
		lng: 90.403798,
		infoWindow: {
			content: '<p>location here</p>'
		}
		});

}

})(jQuery);