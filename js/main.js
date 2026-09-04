// ============================================
// LENIS — smooth scroll con inercia
// Suaviza el scroll con la rueda del mouse (y trackpad).
// Requiere js/lenis.min.js cargado ANTES de este archivo.
// ============================================
var lenis = null;

if ( window.Lenis ) {
	lenis = new Lenis({
		autoRaf: true,     // Lenis maneja su propio requestAnimationFrame, no hace falta armarlo a mano
		smoothWheel: true, // esto es lo que suaviza el scroll con la rueda del mouse
		lerp: 0.08         // "suavidad"/inercia del scroll (0-1, más bajo = más lento/flotante, más alto = más pegado al mouse)
	});
	// Respeta automáticamente "reducir movimiento" del sistema operativo del usuario.
}


AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

jQuery(document).ready(function($) {
	"use strict";

	// ============================================
	// MENÚ MÓVIL (burger)
	// Este HTML no tiene submenús (.has-children) ni un panel
	// .site-mobile-menu aparte: el mismo <nav id="navLinks">
	// se muestra/oculta con una clase sobre <body>.
	// ============================================
	var siteMobileMenu = function() {

		$('body').on('click', '#burgerBtn', function(e) {
			e.preventDefault();
			var $this = $(this);

			if ( $('body').hasClass('nav-open') ) {
				$('body').removeClass('nav-open');
				$this.removeClass('active').attr('aria-expanded', 'false');
			} else {
				$('body').addClass('nav-open');
				$this.addClass('active').attr('aria-expanded', 'true');
			}
		});

		// cerrar al hacer click fuera del menú
		$(document).mouseup(function(e) {
			var container = $('#navLinks, #burgerBtn');
			if ( !container.is(e.target) && container.has(e.target).length === 0 ) {
				if ( $('body').hasClass('nav-open') ) {
					$('body').removeClass('nav-open');
					$('#burgerBtn').removeClass('active').attr('aria-expanded', 'false');
				}
			}
		});

		// cerrar el menú si se agranda la ventana
		$(window).resize(function() {
			var w = $(this).width();
			if ( w > 768 ) {
				if ( $('body').hasClass('nav-open') ) {
					$('body').removeClass('nav-open');
					$('#burgerBtn').removeClass('active').attr('aria-expanded', 'false');
				}
			}
		});

	};
	siteMobileMenu();


	// ============================================
	// NAVEGACIÓN DE UNA SOLA PÁGINA
	// Cubre los links de #navLinks, .flinks (footer), .dim-link
	// y cualquier otro enlace interno con href="#seccion" (los
	// links externos, como WhatsApp o sabium.com.ar, no matchean
	// el selector). Usa Lenis para que el salto sea igual de
	// fluido que el resto del scroll; si Lenis no está cargado,
	// cae de nuevo al scroll animado por jQuery.
	// ============================================
	var OnePageNavigation = function() {
		$('body').on('click', 'a[href^="#"]', function(e) {
			var hash = this.hash;
			if ( !hash || $(hash).length === 0 ) { return; }

			e.preventDefault();

			if ( lenis ) {
				lenis.scrollTo(hash, {
					offset: 0,
					duration: 1.2,
					easing: function (t) { return 1 - Math.pow(1 - t, 3); } // easeOutCubic
				});
				window.location.hash = hash;
			} else {
				$('html, body').animate({
					'scrollTop': $(hash).offset().top
				}, 600, 'easeInOutCirc', function() {
					window.location.hash = hash;
				});
			}

			// si el menú móvil está abierto, se cierra al navegar
			if ( $('body').hasClass('nav-open') ) {
				$('body').removeClass('nav-open');
				$('#burgerBtn').removeClass('active').attr('aria-expanded', 'false');
			}
		});
	};
	OnePageNavigation();


	// ============================================
	// HEADER: encoger/oscurecer al scrollear
	// El header es #siteNav. Agrega la clase "scrolled" (sumala
	// en tu CSS con el estilo que quieras para el header al
	// hacer scroll). Se cuelga del evento de scroll de Lenis
	// para no sumar otro listener de scroll nativo aparte.
	// ============================================
	var siteScroll = function() {
		var apply = function(scrollY) {
			if ( scrollY > 100 ) {
				$('#siteNav').addClass('scrolled');
			} else {
				$('#siteNav').removeClass('scrolled');
			}
		};

		if ( lenis ) {
			lenis.on('scroll', function(e) { apply(e.scroll); });
		} else {
			$(window).scroll(function() { apply($(this).scrollTop()); });
		}
	};
	siteScroll();


	// ============================================
	// ANIMACIONES AL SCROLLEAR (fade + desenfoque)
	// Anima .reveal y .stagger cuando entran en pantalla, UNA
	// sola vez cada uno (así no hay parpadeos si scrolleás para
	// arriba y para abajo). Dispara apenas empieza a asomar el
	// elemento, para que se alcance a ver todo el recorrido de
	// la animación mientras seguís bajando. Prende will-change
	// solo mientras dura la transición (no de forma permanente)
	// para que el navegador la acelere por GPU sin cargar peso
	// de más en el resto de la página.
	//
	// Arranca recién en window "load" (no en document ready):
	// muchas <img> del sitio no tienen width/height reservado,
	// así que mientras cargan, la página es más corta de lo que
	// va a quedar. Si el observer arranca antes de eso, revisa
	// TODO como si ya estuviera en pantalla (porque en ese
	// momento, literalmente lo está) y lo revela de una sola vez
	// al cargar — y como cada uno se revela una sola vez, ya no
	// le queda nada para animar cuando scrolleás de verdad. Por
	// eso se veía "todo junto al recargar, nada al scrollear".
	// ============================================
	var scrollReveal = function() {

		if ( !('IntersectionObserver' in window) ) {
			$('.reveal, .stagger').addClass('in');
			return;
		}

		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if ( !entry.isIntersecting ) { return; }

				var el = entry.target;
				observer.unobserve(el);
				el.style.willChange = 'opacity, transform, filter';

				// esperamos dos frames antes de agregar la clase que
				// dispara la transición: si se agrega en el mismo tick
				// en el que detectamos la intersección, el navegador a
				// veces "junta" el cambio de estado con el pintado
				// inicial y salta directo al resultado final, sin
				// animar nada. Con dos requestAnimationFrame nos
				// aseguramos de que ya pintó el estado oculto antes de
				// pasar al visible.
				requestAnimationFrame(function() {
					requestAnimationFrame(function() {
						el.classList.add('in');
						setTimeout(function() { el.style.willChange = 'auto'; }, 1200);
					});
				});
			});
		}, {
			threshold: 0,
			rootMargin: '0px 0px -5% 0px'
		});

		document.querySelectorAll('.reveal, .stagger').forEach(function(el) {
			observer.observe(el);
		});

	};

	if ( document.readyState === 'complete' ) {
		scrollReveal();
	} else {
		$(window).on('load', scrollReveal);
	}


	// ============================================
	// SECCIÓN "4 DIMENSIONES" (#dimList)
	// Línea de progreso (.dim-line-fill) que crece con el scroll
	// + el número (.dim-num) del bloque actual se resalta con
	// clase .active. Requiere animations.css.
	//
	// Las posiciones (offset, alturas) se calculan una vez al
	// cargar y al resizear, no en cada tick de scroll — eso es
	// lo que suele generar el "trabado": forzar un recálculo de
	// layout en cada evento de scroll es costoso. En cada tick
	// solo hacemos matemática simple con valores ya guardados.
	// También se vuelven a medir en window "load", por si alguna
	// imagen corrió el layout después de la primera medición.
	// ============================================
	var dimensionesProgress = function() {
		var $dimList = $('#dimList');
		if ( $dimList.length === 0 ) { return; }

		var $fill = $('.dim-line-fill');
		var $blocks = $('.dim-block');
		var dimTop = 0;
		var dimHeight = 0;
		var blockMids = [];
		var winHeight = $(window).height();

		var measure = function() {
			dimTop = $dimList.offset().top;
			dimHeight = $dimList.outerHeight();
			winHeight = $(window).height();
			blockMids = $blocks.map(function() {
				var $b = $(this);
				return {
					el: $b,
					mid: $b.offset().top + ( $b.outerHeight() / 2 ),
					half: $b.outerHeight() / 2
				};
			}).get();
		};

		var apply = function(scrollY) {
			var scrollCenter = scrollY + ( winHeight * 0.5 );

			var progress = ( scrollCenter - dimTop ) / dimHeight;
			progress = Math.max(0, Math.min(1, progress));
			$fill.css('height', (progress * 100) + '%');

			blockMids.forEach(function(b) {
				var distance = Math.abs(scrollCenter - b.mid);
				b.el.toggleClass('active', distance < b.half);
			});
		};

		measure();

		if ( lenis ) {
			lenis.on('scroll', function(e) { apply(e.scroll); });
		} else {
			$(window).on('scroll', function() { apply($(window).scrollTop()); });
		}

		$(window).on('resize', function() {
			measure();
			apply(lenis ? lenis.scroll : $(window).scrollTop());
		});

		$(window).on('load', function() {
			measure();
			apply(lenis ? lenis.scroll : $(window).scrollTop());
		});

		apply(lenis ? lenis.scroll : $(window).scrollTop());
	};
	dimensionesProgress();

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


