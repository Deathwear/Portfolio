const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

function setMenu(open) {
	hamburger.classList.toggle('active', open);
	mobile_menu.classList.toggle('active', open);
	hamburger.setAttribute('aria-expanded', String(open));
}

hamburger.addEventListener('click', () => {
	const isOpen = mobile_menu.classList.contains('active');
	setMenu(!isOpen);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
	if (!mobile_menu.contains(e.target) && !hamburger.contains(e.target)) {
		setMenu(false);
	}
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		setMenu(false);
	}
});

// Throttle scroll event
let ticking = false;
document.addEventListener('scroll', () => {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			header.classList.toggle('scrolled', window.scrollY > 250);
			ticking = false;
		});
		ticking = true;
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		setMenu(false);
	});
});

// Dynamic year for footer
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
}
