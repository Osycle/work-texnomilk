'use strict';

(function(){
$(function(){




	// FANCYBOX
	if( $("[data-fancybox='gallery']").length != 0 )
		$("[data-fancybox='gallery']").fancybox({
			afterShow : function( instance, current ) {
			},
			transitionEffect: "zoom-in-out"
		});

	//WOW
	new WOW({
		offset: 30
	}).init();




	// AOS
	AOS.init({
	  offset: 100,
	  once: true,
	  duration: 1000,
	  delay: 100
	});

	setTimeout(function(){AOS.refresh()}, 1000);


	// MMENU
/*	$("#min-menu").mmenu({
		"extensions": [
			"fx-menu-zoom",
			"fx-panels-zoom",
			"pagedim-black",
			"theme-dark"
		],
		"offCanvas": {
			"position": "right"
		},
		"navbars": [
			{
			"position": "top"
			}
		]
	});



*/
	
			$("#min-menu").mmenu({
				extensions 	: [ 
											"position-bottom", 
											"fullscreen", 
											"theme-black", 
											"listview-50", 
											"fx-panels-slide-up", 
											"fx-listitems-drop", 
											"border-offset" 
											],
				navbar 			: 
										{
											title 		: "Меню"
										},
				navbars		: [{
					height 	: 2,
					content : [ 
											'<div class="min-menu-logo">'+
											'<a  href="" ><img src="img/logo.png"/></a>'+
											'</div>'+
											'<div class="close-btn">'+
											'<a  href="#page" ><i class="fa fa-angle-right"></i></a>'+
											'</div>'
										]
							}, 
					{
						content : ["prev","title"] 
					}]
				}, { });





  // Flikity Carousel
  	var arrowStyle = { 
		  x0: 10,
		  x1: 60, y1: 50,
		  x2: 70, y2: 40,
		  x3: 30
		}

  // POPULAR
	var carouselPopular = $('.carousel-popular .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3000,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: checkSm(),
		draggable: !checkSm(),
		wrapAround: true,
		//adaptiveHeight: true,
		//selectedAttraction: 0.2,
		//friction: 0.2,
		//rightToLeft: true,
		pageDots: false,
		contain: true,
		percentPosition: true,
		cellAlign: checkSm() ? "left" : "center"
	});


	var carouselEquipment = $('.carousel-equipment .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3000,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: true,
		draggable: checkSm(),
		wrapAround: true,
		//adaptiveHeight: true,
		//selectedAttraction: 0.2,
		//friction: 0.2,
		//rightToLeft: true,
		pageDots: false,
		contain: false,
		percentPosition: true,
		cellAlign: ''
	});

	var carouselProjects = $('.carousel-projects .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3500,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: true,
		draggable: checkSm(),
		wrapAround: true,
		pageDots: false,
		contain: false,
		percentPosition: true,
		cellAlign: ''
	});

	var carouselReviews = $('.carousel-reviews .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3300,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		groupCells: checkSm() ? 1 : 2,
		prevNextButtons: true,
		draggable: checkSm(),
		wrapAround: true,
		pageDots: false,
		contain: false,
		percentPosition: true,
		cellAlign: ''
	});

	var carouselPartners = $('.carousel-partners .carousel-content').flickity({
		autoPlay: 2800,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: true,
		draggable: checkSm(),
		wrapAround: true,
		pageDots: false,
		contain: false,
		percentPosition: true,
		cellAlign: ''
	});

	var carouselCertification = $('.carousel-certification .carousel-content').flickity({
		//setGallerySize: false,
		autoPlay: 3000,
		arrowShape: arrowStyle,
		imagesLoaded: true,
		prevNextButtons: true,
		draggable: checkSm(),
		wrapAround: true,
		//adaptiveHeight: true,
		//selectedAttraction: 0.2,
		//friction: 0.2,
		//rightToLeft: true,
		pageDots: false,
		contain: false,
		percentPosition: true,
		cellAlign: 'left'
	});



	//VERTICAL CAROUSEL

	var jcarouselWrapper = $('.jcarousel-wrapper');

	for( var i =  0; i < jcarouselWrapper.length; i++ ){
		console.log( jcarouselWrapper.eq(i).find(".jcarousel") )
		jcarouselWrapper.eq(i).find(".jcarousel")
			.jcarousel({
	      vertical: checkSm() ? true : true,
	       animation: {
		        duration: 600,
		        easing:   'linear',
		        complete: function() {
		        }
		    },
	      center: false
	    })
			.on('jcarousel:targetin', 'li', function( event, carousel ) {
			    $(this).addClass('active');
			})
			.on('jcarousel:targetout', 'li', function( event, carousel ) {
					$(this).removeClass('active');
			})

			jcarouselWrapper.eq(i).find(".jcarousel").jcarousel('scroll', '-1');
			jcarouselWrapper.eq(i).find(".jcarousel").jcarousel('fullyvisible');


		// CONTROLS
		var prevNext = jcarouselWrapper.eq(i).find(".jcarousel-prev-next");

		//prev
		prevNext.find(".jcarousel-control-prev")
		  .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
      })
      .jcarouselControl({
          target: '-=1'
      });

     //next
    prevNext.find(".jcarousel-control-next")
      .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
      })
      .jcarouselControl({
          target: '+=1'
      });


	}//:end for;


	//BOOTSTRAP TAB
	var prevTab = $('a[data-toggle="tab"]').closest('[role="active"].active');
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  $(e.target).closest('[role="active"]').addClass("active");
	  $(prevTab).removeClass("active");
	 	console.log( e.target, prevTab )
	  prevTab = $(e.target).closest('[role="active"]');
	})







	if( $('.carousel-article').length >= 0 ){

		var carouselMain = 		$('.carousel-article .carousel-main'),
				carouselNav = 		$('.carousel-article .carousel-nav');

		for( var i = 0 ; i < carouselMain.length ; i++ ){

			var crs = $(carouselMain).eq(i).flickity({
				imagesLoaded: true,
				prevNextButtons: false,
				cellAlign: 'center',
				//friction: 1,
				//selectedAttraction: 1,
				initialIndex: 0,
				draggable: true,
				contain: true,
				pageDots: false
			});
			var flkty = crs.data('flickity');

			crs.on( 'settle.flickity', function(e) {
				$(flkty.selectedElement).siblings().css("display", "none");
			})
			crs.on( 'select.flickity', function(e) {
				$(flkty.selectedElement).css("display", "");
			})

			$(carouselNav).eq(i).flickity({
				imagesLoaded: true,
				initialIndex: 0,
			  asNavFor: $(carouselMain)[i],
			  prevNextButtons: true,
			  draggable: true,
			  cellAlign: 'center',
			  adaptiveHeight: true,
			  //contain: true,
			  pageDots: false
			});

		}
	}







	//FORM
	(function() {

		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {

			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
	})();



	function onLoaded  (){
		
		//MASONRY
		if( $('.grid-img').length ){
		
			var $grid = $('.grid-img').masonry({
			  itemSelector: '.grid-img-item',
			  columnWidth: '.grid-img-sizer',
			  percentPosition: true
			});

		}
	}



	if ( !$(".short-news-content").text().trim().length )
		if ( $(".search-not-found").length )
			$(".search-not-found").addClass("show");

	//RESIZE
	$( window ).on("resize", function(e){});

	//SCROLL
	var header_status = false;
	$( window ).on("scroll", function(e){

		if($(window).scrollTop() > 300 && header_status == false){

			header_status = true;

			if ( $(".min-menu") ) $(".min-menu").addClass("scrolled");

		}else if($(window).scrollTop() < 300 && header_status == true){

			header_status = false;
			if ( $(".min-menu") ) $(".min-menu").removeClass("scrolled");

		}

	});





	
	window.preLoader = {

		preBox: ".pre-box",
		enter: false,
		status: $(".pre-box").hasClass("in"),

		preToggle: function ( bool, func ) {
			var endtime = 600;
			if( !this.enter ) 
				return;
			if ( typeof func === "function" )
				setTimeout( function() { func(); }, endtime )
			var preBox = $(this.preBox);

			bool || this.status ?
				preBox.removeClass("in").setTimeout( function(){ $( preBox ).hide(); }, endtime )
			:
				preBox.show().addClass("in").find(".box-content");
			
			return this.status = !this.status;

		},


		preImg: function ( img ) {

			var images = 						 		img || document.images,
					imagesTotalCount = 			images.length,
					imagesLoadedCount = 		0,
					preloadPercent = 		 		$(".percent").text("0 %");


			if( imagesTotalCount == 0 ){
				preOnload();
				$(preloadPercent).text("100 %"); 
			}

			for ( var i = 0; i < imagesTotalCount ; i++ ) {
				var image_clone = new Image();
						image_clone.onload = 		image_loaded;
						image_clone.onerror = 	image_loaded;
						image_clone.src = 			images[i].src;
			}

			function preOnload (){
				onLoaded();
			}

			function image_loaded (){
				imagesLoadedCount++;

				var per = ( ( 100 / imagesTotalCount ) * imagesLoadedCount ) << 0 ;

				setTimeout( function(){
					//console.log(per);
					$(preloadPercent).text(  per +  "%"); 
				}, 1)

				if(imagesLoadedCount >= imagesTotalCount )	preOnload();
			}

		}
	}


	preLoader.preImg();



	});
}) (jQuery);














var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac =  	 /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);










// COMMON FUNCTION

function checkSm(){
	return ($( document ).width() < 992);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function scrolledDiv(el) {
	try{
	  var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elTop = $(el).offset().top,
		elBottom = elTop + $(el).height()/1.8;
	}catch(err){console.error();}

  	return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
}








/**
	REVOLUTION Slider
*/
	// INDEX SLIDER

	  $(function() {
	  	if( $('.rev-slider').length != 0 )
		   window.revSlider = $('.rev-slider').revolution({
					delay:6000,
					startwidth: $( window ).width() < 992 ? $( window ).width() : 1170,
					startheight: $( window ).width() < 992 ? 600 : 550,
					autoHeight:"off",
					fullScreenAlignForce:"off",

					onHoverStop:"off",

					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,

					hideThumbsOnMobile:"on",
					hideBulletsOnMobile:"on",
					hideArrowsOnMobile:"on",
					hideThumbsUnderResoluition:0,

					hideThumbs: -1,
					hideTimerBar:"on",

					keyboardNavigation:"off",

					navigationType:"none",
					navigationArrows:"solo",	//small
					navigationStyle:"round",

					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset: 0,
					navigationVOffset: 30,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:30,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:30,
					soloArrowRightVOffset:0,


					touchenabled: "off",
					swipe_velocity:"0.7",
					swipe_max_touches:"1",
					swipe_min_touches:"1",
					drag_block_vertical: "false",

					stopAtSlide:-1,
					stopAfterLoops:-1,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					hideSliderAtLimit:0,

					fullWidth:"off",
					fullScreen:"off",
					fullScreenOffsetContainer: "",

					dottedOverlay:"none",
					forceFullWidth:"off",

		      shadow:0

		    }).find("li").click(function(){ revSlider.revnext();})
			
	 	});

