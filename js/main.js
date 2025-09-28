 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    dots: false,
		    nav: false,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 20,
	        	nav: true,
	          items: 3
	        }
		    }
			});

			$('.customNextBtn').click(function() {
			  $('.nonloop-block-14').trigger('next.owl.carousel');
			})
			$('.customPrevBtn').click(function() {
			  $('.nonloop-block-14').trigger('prev.owl.carousel');
			})
		}



		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    smartSpeed: 900,
	    autoplayTimeout: 7000,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
	  });

		$('.slide-one-item').on('translated.owl.carousel', function(event) {
			console.log('translated');
			$('.owl-item.active').find('.js-slide-text').addClass('active');
		});
		$('.slide-one-item').on('translate.owl.carousel', function(event) {
			console.log('translate');
			$('.owl-item.active').find('.js-slide-text').removeClass('active');
		});
		
		$('.owl-item.active').find('.js-slide-text').addClass('active');

	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();
});

/* Sabium – logo animación */
(function(){
  var hero = document.querySelector('.sabium-hero');
  if(!hero) return;

  var curveImg = hero.querySelector('.curve');
  var sparkImg = hero.querySelector('.spark');
  var calImg   = hero.querySelector('.calendar');
  var logoImg  = hero.querySelector('img[src*="LOGO_1"]'); 

  function bounceLogo(){
    return new Promise(function(resolve){
      if(!logoImg) { resolve(); return; }
      logoImg.style.opacity = '1';
      logoImg.style.animation = 'bounce 2.5s cubic-bezier(.2,.7,.2,1)';
      setTimeout(function(){
        resolve();
      }, 2500); 
    });
  }

  // Función typewriter 
  function typewriter(){
    return new Promise(function(resolve){
      const root = document.getElementById('sabiumHero');
      if(!root) { resolve(); return; }
      const box = root.querySelector('.typewriter');
      if(!box) { resolve(); return; }
      const text = "aulas a un clic";      
      if (box.__timer) { clearTimeout(box.__timer); delete box.__timer; }
      box.innerHTML = '';
      const tn = document.createTextNode('');
      const caret = document.createElement('span');
      caret.className = 'caret';
      caret.textContent = '|';
      box.replaceChildren(tn, caret);

      let i = 0;
      (function type(){
        if (i < text.length){
          tn.textContent = text.slice(0, i + 1);     
          i++;
          box.__timer = setTimeout(type, 70);       
        } else {
          caret.remove();                            
          delete box.__timer;
          resolve();                               
        }
      })();
    });
  }

	function revealCurve(ms){
		ms = ms || 1800;
		return new Promise(function(resolve){
		if(!curveImg) { resolve(); return; }
		curveImg.style.setProperty('--reveal', '0%');
		var start = null;
		function step(t){
			if(!start) start = t;
			var p = Math.min(1, (t - start)/ms);
			curveImg.style.setProperty('--reveal', (p*100)+'%');
			if(p<1) requestAnimationFrame(step); else resolve();
		}
		requestAnimationFrame(step);
    });
  }

  function popSpark(){
    if(!sparkImg) return;
    sparkImg.style.opacity = '1';
    sparkImg.style.animation = 'pulse-pop 700ms ease-out';
  }

  function bounceCalendar(){
    if(!calImg) return;
    calImg.style.opacity = '1';
    calImg.style.animation = 'bounce 1s cubic-bezier(.2,.7,.2,1)';
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(async function(e){
      if(!e.isIntersecting) return;
      io.disconnect();
      await bounceLogo();           
      await typewriter();           
      popSpark();                  
      await revealCurve(1800);     
      bounceCalendar();            
    });
  }, { threshold: 0.5 });

  io.observe(hero);

})();
