AOS.init();

let timeTimeOut = 3500; 
let time = 300;

const elements = {
  introLogo: document.querySelector("#intro_logo"),
  hero: document.querySelector("#hero"),
  imgHero1: document.querySelector("#img_hero_1"),
  imgHero2: document.querySelector("#img_hero_2"),
  spanIcon: document.querySelector("#span_icon"),
  body: document.querySelector("body"),
};

const animation_1 = () => elements.introLogo.classList.add("d-none");
const animation_2 = () => {
  elements.hero.classList.add("fade_in");
  elements.imgHero1.classList.add("img_left_right");
  elements.imgHero2.classList.add("img_right_left");
};
const animation_3 = () => {
  elements.spanIcon.classList.remove("d-none");
  elements.body.classList.remove("scroll-y-none");
};

//#region EFECTO PARALLAX
const handleScroll = () => {
  requestAnimationFrame(() => {
    let position = window.scrollY || document.documentElement.scrollTop;
    let imgHamburger1 = document.getElementById("img_hamburger_1");
    let sectionHamburgers = document.getElementById("section_hamburgers");
  });
};

window.addEventListener('scroll', handleScroll);
//#endregion EFECTO PARALLAX

//#region DETECTAR DARK-MODE EN EL NAVEGADOR
const favicon = document.querySelector("#favicon");
favicon.href = window.matchMedia('(prefers-color-scheme: dark)').matches ? "assets/crown_logo_white.webp" : "assets/crown_logo.webp";
//#endregion DETECTAR DARK-MODE EN EL NAVEGADOR

document.addEventListener("DOMContentLoaded", () => {
  elements.body.classList.add("scroll-y-none");
  elements.imgHero1.classList.remove("img_left_right");
  elements.imgHero2.classList.remove("img_right_left");

  const animations = () => {
    setTimeout(animation_1, timeTimeOut);
    setTimeout(animation_2, timeTimeOut += time);
    setTimeout(animation_3, timeTimeOut += time + 2500);
  };
  animations();
});