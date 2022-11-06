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



// Traduction 
const translate = document.querySelector('.translate');

const AccueilFR = document.querySelector('.TLAccueil');
const CompetencesFR = document.querySelector('.TLCompetences');
const ProjetsFR = document.querySelector('.TLProjets');
const SalutFR = document.querySelector('.TLSalut');
const JesuisFR = document.querySelector('.TLJesuis');
const UnProjetFR = document.querySelector('.TLUnProjet');
const MesCompetencesFR = document.querySelector('.TLMesCompetences');
const DemoFR = document.querySelector('.TLDemo');
const ProjetsRecentFR = document.querySelector('.TLProjetsrecents');
const PremiereAnneeFR = document.querySelector('.TLPremiereA');
const Texte1FR = document.querySelector('.TLText1');
const Texte2FR = document.querySelector('.TLText2');
const JVFR = document.querySelector('.TLJv');
const Texte3FR = document.querySelector('.TLText3');
const FormFR = document.querySelector('.TLForm');
const EnvoyerFR = document.querySelector('.TLEnvoyer');
const FooterFR = document.querySelector('.TLFooter');


if(translate){
	translate.addEventListener('click',() => {
		document.querySelector(".translate").innerHTML = "";
		AccueilFR.innerHTML = "Home";
		CompetencesFR.innerHTML = "Skills";
		ProjetsFR.innerHTML = "Projects";
		SalutFR.innerHTML = "Hey";
		JesuisFR.innerHTML = "I am";
		UnProjetFR.innerHTML = "Need Something?";
		MesCompetencesFR.innerHTML = "My Skills";
		DemoFR.innerHTML = "Click here to see a demonstration of my skills";
		ProjetsRecentFR.innerHTML = "Recent Projects";
		PremiereAnneeFR.innerHTML = "My First Year";
		Texte1FR.innerHTML = "To be able to pass in 2nd year of Coding & Digital Innovation, I had to realize a website on a marketing project made before. So I made my website on a virtual reality game.";
		Texte2FR.innerHTML = "During my SCSS apprenticeship, I had to create a website about an important and well-known place in Paris. So I chose to do it on DisneyLand.";
		JVFR.innerHTML = "A Game Programming Project";
		Texte3FR.innerHTML = "Before starting my studies in Coding and Digital Innovation, I spent a year at Rubika in Game Design during which I had the opportunity to make a platform game in C#.";
		FormFR.innerHTML = "Contact Me";
		EnvoyerFR.innerHTML = "Send";
		FooterFR.innerHTML = 'You can find me here';
	})
}





