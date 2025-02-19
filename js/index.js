AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back',
  once: true,
  mirror: false,
});

let timeTimeOut = 3500;
let time = 300;

// Animaciones para los elementos
const animation_1 = () => {
  const introLogo = document.querySelector("#intro_logo");
  if (introLogo) introLogo.classList.add("d-none");
}

const animation_2 = () => {
  const hero = document.querySelector("#hero");
  const imgHero1 = document.querySelector("#img_hero_1");
  const imgHero2 = document.querySelector("#img_hero_2");

  if (hero) hero.classList.add("fade_in");
  if (imgHero1) imgHero1.classList.add("img_left_right");
  if (imgHero2) imgHero2.classList.add("img_right_left");
}

const animation_3 = () => {
  const spanIcon = document.querySelector("#span_icon");
  const body = document.querySelector("body");

  if (spanIcon) spanIcon.classList.remove("d-none");
  if (body) body.classList.remove("scroll-y-none");
}

// Función optimizada para animaciones secuenciales
const startAnimations = () => {
  setTimeout(() => animation_1(), timeTimeOut);
  setTimeout(() => animation_2(), timeTimeOut += time);
  setTimeout(() => animation_3(), timeTimeOut += time + 2500);
}

// Optimización del evento de scroll con requestAnimationFrame
const handleScroll = () => {
  requestAnimationFrame(() => {
    let position = window.pageYOffset || document.documentElement.scrollTop;
    const imgHamburger1 = document.getElementById("img_hamburger_1");
    const sectionHamburgers = document.getElementById("section_hamburgers");

    // Optimización de parallax solo si es necesario
    if (imgHamburger1 && sectionHamburgers) {
      imgHamburger1.style.bottom = `${position * 0.01}px`;
    }
  });
}

// Detectar el modo oscuro y actualizar el favicon
const updateFavicon = () => {
  const favicon = document.querySelector("#favicon");
  const darkModeLogo = "assets/crown_logo_white.png";
  const lightModeLogo = "assets/crown_logo.png";

  const logo = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkModeLogo : lightModeLogo;
  if (favicon) favicon.href = logo;
};

// Solo ejecutamos la función de actualización de favicon al inicio y cuando cambia el modo
updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const imgHero1 = document.querySelector("#img_hero_1");
  const imgHero2 = document.querySelector("#img_hero_2");

  // Aseguramos que el body tenga la clase correcta al inicio
  if (body) body.classList.add("scroll-y-none");

  // Eliminamos las clases de los elementos al cargar la página
  if (imgHero1) imgHero1.classList.remove("img_left_right");
  if (imgHero2) imgHero2.classList.remove("img_right_left");

  // Iniciamos las animaciones secuenciales
  startAnimations();
});

// Optimización del evento de scroll usando requestAnimationFrame
window.addEventListener('scroll', handleScroll, { passive: true });
