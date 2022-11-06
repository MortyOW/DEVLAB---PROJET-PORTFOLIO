const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const menu_mobile = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');



if(hamburger){
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu_mobile.classList.toggle('active');
})};

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		menu_mobile.classList.toggle('active');
	});
});





