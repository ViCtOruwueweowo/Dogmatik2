AOS.init();

const TIME_OUT = 3500;
const TIME_INCREMENT = 300;

const animation_1 = () => document.querySelector("#intro_logo").classList.add("d-none");
const animation_2 = () => {
    document.querySelector("#hero").classList.add("fade_in");
    document.querySelector("#img_hero_1").classList.add("img_left_right");
    document.querySelector("#img_hero_2").classList.add("img_right_left");
};
const animation_3 = () => {
    document.querySelector("#span_icon").classList.remove("d-none");
    document.querySelector("body").classList.remove("scroll-y-none");
};

// Efecto Parallax
window.onscroll = () => {
    let position = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById("img_hamburger_1").style.bottom = `${position * 0.01}px`;
};

// Detectar Dark Mode en el navegador
const favicon = document.querySelector("#favicon");
favicon.href = window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? "assets/crown_logo_white.png" 
    : "assets/crown_logo.png";

// Ejecutar animaciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").classList.add("scroll-y-none");
    document.querySelector("#img_hero_1").classList.remove("img_left_right");
    document.querySelector("#img_hero_2").classList.remove("img_right_left");

    setTimeout(animation_1, TIME_OUT);
    setTimeout(animation_2, TIME_OUT + TIME_INCREMENT);
    setTimeout(animation_3, TIME_OUT + TIME_INCREMENT + 2500);
});
