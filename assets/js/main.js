(function () {
	"use strict";

	//top link scroll
	const navBar = document.querySelector(".navbar");

	window.addEventListener('scroll', () => {
		const scrollHeight = window.pageYOffset;
		const navHeight = navBar.getBoundingClientRect().height;
		if (scrollHeight > navHeight) {
			navBar.classList.add("navBarScroll");
		}
		else {
			navBar.classList.remove("navBarScroll");
		}
	});

	//Active Scroll on link
	

	//responsive navbar
	const navBtn = document.querySelector(".nav-btn");
	const nav = document.querySelector(".nav");
	const links = document.querySelectorAll(".nav a");
	const navBtnIcon = document.querySelector(".nav-btn-icon");

	navBtn.addEventListener('click', () => {
		nav.classList.toggle("open");
		navBtnIcon.classList.toggle("fa-times");
		links.forEach(link => {
			link.classList.toggle('fade');
		});
	});

	//Typed Animation

	const typed = document.querySelector(".typed");

	if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
 	}

 	// Animation on scroll
   
    function aos_init() {
     AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
      });
    }
    window.addEventListener('load', () => {
    aos_init();
    });

})();