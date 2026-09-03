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

 // mobile nav
  const burger = document.getElementById('burgerBtn');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    burger.setAttribute('aria-expanded', String(!isOpen));
    if(isOpen){
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'fixed';
      links.style.top = '68px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(24,27,52,.98)';
      links.style.padding = '22px 28px';
      links.style.gap = '16px';
      links.style.zIndex = '55';
    }
  });
  document.querySelectorAll('nav.links a').forEach(a=>{
    a.addEventListener('click', ()=>{ if(window.innerWidth<=980){ links.style.display='none'; burger.setAttribute('aria-expanded','false'); } });
  });

  // sticky nav shadow on scroll
  const siteNav = document.getElementById('siteNav');
  window.addEventListener('scroll', ()=>{
    siteNav.classList.toggle('scrolled', window.scrollY > 8);
  }, {passive:true});

  // scrollspy — highlight active nav link
  const navAnchors = Array.from(document.querySelectorAll('nav.links a[data-nav]'));
  const spySections = navAnchors.map(a => document.getElementById(a.dataset.nav)).filter(Boolean);
  const spyIO = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const link = navAnchors.find(a => a.dataset.nav === entry.target.id);
      if(!link) return;
      if(entry.isIntersecting){
        navAnchors.forEach(a=>a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
  spySections.forEach(s=>spyIO.observe(s));

  // reveal on scroll
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal, .dim-block, .dim-list, .thesis');
  if(prefersReduced){
    revealEls.forEach(el=>el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.12});
    revealEls.forEach(el=>io.observe(el));
  }

  // animated counters
  const counters = document.querySelectorAll('.count-up');
  const counterIO = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      if(prefersReduced){ el.textContent = target + suffix; counterIO.unobserve(el); return; }
      const dur = 1200; const start = performance.now();
      function tick(now){
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, {threshold:.6});
  counters.forEach(c=>counterIO.observe(c));

  // hero login card subtle parallax tilt
  const loginCard = document.getElementById('loginCard');
  if(loginCard && !prefersReduced && window.matchMedia('(pointer:fine)').matches){
    loginCard.addEventListener('mousemove', (e)=>{
      const r = loginCard.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      loginCard.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
    });
    loginCard.addEventListener('mouseleave', ()=>{
      loginCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // magnetic glow on primary buttons
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mousemove', (e)=>{
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      btn.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  // LinkedIn carousel
  (function(){
    const track = document.getElementById('liTrack');
    const prev = document.getElementById('liPrev');
    const next = document.getElementById('liNext');
    const dotsWrap = document.getElementById('liDots');
    if(!track || !prev || !next || !dotsWrap) return;
    const cards = Array.from(track.children);
    const dots = cards.map((_, i)=>{
      const d = document.createElement('button');
      d.className = 'li-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Ir a la publicación ' + (i+1));
      d.addEventListener('click', ()=> scrollToCard(i));
      dotsWrap.appendChild(d);
      return d;
    });

    function cardStep(){
      const card = cards[0];
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 22);
      return card.getBoundingClientRect().width + gap;
    }
    function scrollToCard(i){
      track.scrollTo({left: i * cardStep(), behavior:'smooth'});
    }
    function activeIndex(){
      return Math.round(track.scrollLeft / cardStep());
    }
    function updateDots(){
      const idx = Math.max(0, Math.min(cards.length-1, activeIndex()));
      dots.forEach((d,i)=> d.classList.toggle('active', i===idx));
    }
    let scrollTimer;
    track.addEventListener('scroll', ()=>{
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateDots, 90);
    }, {passive:true});

    prev.addEventListener('click', ()=> scrollToCard(Math.max(0, activeIndex()-1)));
    next.addEventListener('click', ()=>{
      const nextIdx = activeIndex()+1;
      if(nextIdx >= cards.length){ scrollToCard(0); } else { scrollToCard(nextIdx); }
    });

    // autoplay, pauses on interaction
    let autoplay;
    function startAutoplay(){
      if(prefersReduced) return;
      stopAutoplay();
      autoplay = setInterval(()=>{
        const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
        if(nearEnd){ track.scrollTo({left:0, behavior:'smooth'}); }
        else { scrollToCard(activeIndex()+1); }
      }, 4800);
    }
    function stopAutoplay(){ clearInterval(autoplay); }
    track.addEventListener('pointerenter', stopAutoplay);
    track.addEventListener('pointerleave', startAutoplay);
    track.addEventListener('touchstart', stopAutoplay, {passive:true});
    startAutoplay();

    // like button toggle (visual only)
    track.querySelectorAll('.li-like').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        btn.classList.toggle('liked');
        btn.querySelector('svg').setAttribute('fill', btn.classList.contains('liked') ? 'currentColor' : 'none');
      });
    });
  })();

  // contact form (visual only, no backend)
  const form = document.querySelector('.contact-form');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', ()=>{
    note.textContent = '¡Gracias! Recibimos tu mensaje y te contactamos a la brevedad.';
    note.style.color = 'var(--teal-dark)';
    note.style.fontWeight = '600';
    form.reset();
  });
