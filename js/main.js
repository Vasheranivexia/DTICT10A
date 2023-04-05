// === Resize navbar on Scroll ===
var navbar = document.querySelector(".navbar");

// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector('.menu-btn');

if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlick is clicked
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove(".active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Product Color
var pic = document.querySelector("#main-shoe");
var b1 = document.querySelector(".black1");
var b2 = document.querySelector(".black2");
var b3 = document.querySelector(".black3");
var b4 = document.querySelector(".black4");
var b5 = document.querySelector(".black5");
var b6 = document.querySelector(".black6");
const colors = document.querySelectorAll(".color");
// store product info in object
var	info = [
	{
		src: "img/products/bnha.png"
	},
	{
		src: "img/products/kakegurui.png"
	},
	{
		src: "img/products/Nezuko.png"
	},
	{
		src: "img/products/jjk.png"
	},
	{
		src: "img/products/rveve.png"
	},
	{
		src: "img/products/haikyu.png"
	}
]
// change color
b1.addEventListener("click",function(){
	pic.src = info[0].src;
})

b2.addEventListener("click",function(){
	pic.src = info[1].src;
})

b3.addEventListener("click",function(){
	pic.src = info[2].src;
})

b4.addEventListener("click",function(){
	pic.src = info[3].src;
})

b5.addEventListener("click",function(){
	pic.src = info[4].src;
})

b6.addEventListener("click",function(){
	pic.src = info[5].src;
})

//active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}

colors.forEach(c => c.addEventListener('click', color));