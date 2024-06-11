// MENU MOBILE

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/icons8-cardápio-50.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/icons8-excluir-50.png";
    }
}

// CRIANDO UM SLIDESHOW AUTOMÁTICO

let imagens=['./assets/img/mahindra-FE.webp', './assets/img/mahindra-banner.jpg', './assets/img/mahindra-banner2.jpg', './assets/img/mahindra-banner3.webp'];
let index=0;
let time=5000;

function slideShow(){
    document.getElementById("banners").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }

    setTimeout('slideShow()', time);
}

slideShow();