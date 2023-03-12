const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
var lastScrollTop = 0;
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40 && lastScrollTop-top<=0){
            nav.style.opacity="0";
            nav.style.transform="translateY(-50px)";
	}
	if(lastScrollTop-top>5){
	    nav.style.opacity="1";
        nav.style.transform="";
	}
	lastScrollTop=top;
	let scroll = window.scrollY;
	let moon = document.getElementById("moon");
	let mountains_b = document.getElementById("mountains_behind");
	let stars = document.getElementById("stars");
	stars.style.left = scroll*0.25+"px";
	moon.style.top = scroll*1.05+"px";
	mountains_b.style.top = scroll*0.5+"px";
});
VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400
	});
ScrollOut({
    targets: ".card, .contact-form"
});
