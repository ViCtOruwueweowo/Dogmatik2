AOS.init();

const TIMEOUT_INITIAL = 3500;
const TIME_INCREMENT = 300;
const TIME_ANIMATION_3 = 2500;

const elements = {
  introLogo: document.getElementById("intro_logo"),
  hero: document.getElementById("hero"),
  imgHero1: document.getElementById("img_hero_1"),
  imgHero2: document.getElementById("img_hero_2"),
  spanIcon: document.getElementById("span_icon"),
  body: document.body,
};

const animations = [
  () => elements.introLogo.classList.add("d-none"),
  () => {
    elements.hero.classList.add("fade_in");
    elements.imgHero1.classList.add("img_left_right");
    elements.imgHero2.classList.add("img_right_left");
  },
  () => {
    elements.spanIcon.classList.remove("d-none");
    elements.body.classList.remove("scroll-y-none");
  }
];

document.addEventListener("DOMContentLoaded", () => {
  elements.body.classList.add("scroll-y-none");
  elements.imgHero1.classList.remove("img_left_right");
  elements.imgHero2.classList.remove("img_right_left");

  let delay = TIMEOUT_INITIAL;
  animations.forEach(animation => {
    setTimeout(animation, delay);
    delay += TIME_INCREMENT;
  });
  setTimeout(animations[2], delay + TIME_ANIMATION_3);
});

//#region EFECTO PARALLAX
const handleScroll = () => {
  requestAnimationFrame(() => {
    const position = window.scrollY || document.documentElement.scrollTop;
    // Aquí puedes añadir efectos si es necesario sin afectar el rendimiento
  });
};

window.addEventListener("scroll", handleScroll, { passive: true });
//#endregion EFECTO PARALLAX

//#region DETECTAR DARK-MODE EN EL NAVEGADOR
const favicon = document.getElementById("favicon");
const updateFavicon = e => {
  favicon.href = e.matches ? "assets/crown_logo_white.webp" : "assets/crown_logo.webp";
};

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
updateFavicon(darkModeMediaQuery);
darkModeMediaQuery.addEventListener("change", updateFavicon);
//#endregion DETECTAR DARK-MODE EN EL NAVEGADOR
