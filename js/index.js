//BOTÃO MENU DO RESPONSIVO

//seleção do menu, logo e carrinho
const principal = document.querySelector(".main-header");
const navmais = document.querySelector(".more");
const navfechar = document.querySelector(".close");
const nav = document.querySelector(".header");

const navesq = principal.getBoundingClientRect().left;
//ao clicar
navmais.addEventListener("click", () => {
  if (navesq < 0) {
    //add classe show no body, principal e nav
    principal.classList.add("side");
    document.body.classList.add("side");
    nav.classList.add("side");
  }
});
//ao clicar
navfechar.addEventListener("click", () => {
  if (navesq < 0) {     
    //removendo classe show do body, principal e nav
    principal.classList.remove("side");
    document.body.classList.remove("side");
    nav.classList.remove("side");
  }
});


//BANNERS
//$ nao confunde variaveis com valores/objetos puros
const $simpleCarousel = document.querySelector(".js-carousel-simple");

new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel-simple-dots",
  scrollLock: true,
});

