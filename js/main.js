// ============================================
// MENÚ MÓVIL (burger)
// ============================================
(function(){
	var burger = document.getElementById('burgerBtn');
	var links = document.getElementById('navLinks');
	if(!burger || !links) return;

	function closeMenu(){
		document.body.classList.remove('nav-open');
		burger.classList.remove('active');
		burger.setAttribute('aria-expanded', 'false');
	}
	function openMenu(){
		document.body.classList.add('nav-open');
		burger.classList.add('active');
		burger.setAttribute('aria-expanded', 'true');
	}

	burger.addEventListener('click', function(){
		if(document.body.classList.contains('nav-open')){ closeMenu(); } else { openMenu(); }
	});

	links.querySelectorAll('a').forEach(function(a){
		a.addEventListener('click', function(){ closeMenu(); });
	});

	document.addEventListener('click', function(e){
		if(!document.body.classList.contains('nav-open')) return;
		if(links.contains(e.target) || burger.contains(e.target)) return;
		closeMenu();
	});

	window.addEventListener('resize', function(){
		if(window.innerWidth > 980){ closeMenu(); }
	});
})();

// ============================================
// HEADER: sombra al scrollear
// ============================================
(function(){
	var nav = document.getElementById('siteNav');
	if(!nav) return;
	window.addEventListener('scroll', function(){
		if(window.scrollY > 60){ nav.classList.add('scrolled'); }
		else { nav.classList.remove('scrolled'); }
	}, { passive: true });
})();

// ============================================
// ANIMACIONES AL SCROLLEAR (.reveal)
// ============================================
(function(){
	var revealEls = document.querySelectorAll('.reveal');
	if(!revealEls.length) return;

	var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if(prefersReduced){
		revealEls.forEach(function(el){ el.classList.add('in'); });
		return;
	}

	var io = new IntersectionObserver(function(entries){
		entries.forEach(function(entry){
			if(entry.isIntersecting){
				entry.target.classList.add('in');
				io.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });

	revealEls.forEach(function(el){ io.observe(el); });
})();

// ============================================
// FORMULARIO DE CONTACTO (visual, sin backend)
// ============================================
(function(){
	var form = document.querySelector('.contact-form');
	var note = document.getElementById('formNote');
	if(!form || !note) return;

	form.addEventListener('submit', function(){
		note.textContent = '¡Gracias! Recibimos tu mensaje y te contactamos a la brevedad.';
		note.style.color = 'var(--teal-dark)';
		note.style.fontWeight = '600';
		form.reset();
	});
})();
