const products = [
    {
        id: 1,
        name: "Adidas Yeezy Boost 350 V2",
        price: 220,
        image: "./imgs/hippie.png",
    },
    {
        id: 2,
        name: "Nike Air Max 1 'Evergreen Aura'",
        price: 140,
        image: "./imgs/air2.png",
    },
    {
        id: 3,
        name: "Jordan 1 Retro High Dark Mocha",
        price: 170,
        image: "./imgs/jordan.png",
    },
    {
        id: 4,
        name: "Nike Dunk Low SP Champ Colors",
        price: 100,
        image: "./imgs/crater2.png",
    },
    {
        id: 5,
        name: "Adidas Boost 700 V3 Srphym",
        price: 200,
        image: "./imgs/hippie.png",
    },
    {
        id: 6,
        name: "Skechers D'Lites 3.0",
        price: 70,
        image: "./imgs/air.png",
    },
];

const bar = document.getElementById('bar');
const nav = document.getElementById('nav_bar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}