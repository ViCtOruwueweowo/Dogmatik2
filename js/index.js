AOS.init();

const TIME_OUT = 3500;
const TIME_INCREMENT = 300;

const body = document.body;
const introLogo = document.querySelector("#intro_logo");
const hero = document.querySelector("#hero");
const imgHero1 = document.querySelector("#img_hero_1");
const imgHero2 = document.querySelector("#img_hero_2");
const spanIcon = document.querySelector("#span_icon");
const favicon = document.querySelector("#favicon");
const imgHamburger = document.getElementById("img_hamburger_1");

// Funciones de animación
const animation_1 = () => introLogo.classList.add("d-none");
const animation_2 = () => {
    hero.classList.add("fade_in");
    imgHero1.classList.add("img_left_right");
    imgHero2.classList.add("img_right_left");
};
const animation_3 = () => {
    spanIcon.classList.remove("d-none");
    body.classList.remove("scroll-y-none");
};

// Efecto Parallax optimizado con requestAnimationFrame
const updateParallax = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    imgHamburger.style.bottom = `${position * 0.01}px`;
    requestAnimationFrame(updateParallax);
};
requestAnimationFrame(updateParallax);

// Detectar Dark Mode en el navegador
favicon.href = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "assets/crown_logo_white.png"
    : "assets/crown_logo.png";

// Ejecutar animaciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    body.classList.add("scroll-y-none");
    imgHero1.classList.remove("img_left_right");
    imgHero2.classList.remove("img_right_left");

    setTimeout(animation_1, TIME_OUT);
    setTimeout(animation_2, TIME_OUT + TIME_INCREMENT);
    setTimeout(animation_3, TIME_OUT + TIME_INCREMENT + 2000);
});
