'use strict';
let btn = document.getElementById('menu');
let nav = document.getElementById('nav');
function menu() {
	let block = window.getComputedStyle(nav).display;
	if (block === "none") {
    	document.querySelector('#menu').classList.add("active-btn");
		nav.style.display = "flex";
	}
	else if (block === "flex"){
    	document.querySelector('#menu').classList.remove("active-btn");
		nav.style.display = "none";
	}
}
btn.addEventListener("click",menu);
window.onload = function() {
    document.querySelector('.loader').classList.add("preloader-remove");
};