const products = [
    {
        id: 1,
        name: "Cartoon Astronaut T-Shirts",
        price: 78,
        image: "images/products/f1.jpg",
    },
    {
        id: 2,
        name: "Nike Air Max 1 'Evergreen Aura'",
        price: 140,
        image: "images/products/f2.jpg",
    },
    {
        id: 3,
        name: "Jordan 1 Retro High Dark Mocha",
        price: 170,
        image: "images/products/f3.jpg",
    },
    {
        id: 4,
        name: "Nike Dunk Low SP Champ Colors",
        price: 100,
        image: "images/products/f7.jpg",
    },
    {
        id: 5,
        name: "Adidas Boost 700 V3 Srphym",
        price: 200,
        image: "images/products/f8.jpg",
    },
];
// ********************************************

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
// *********************************************
const wrapper = document.querySelector("#sliderWrapper");

const menuItems = document.querySelectorAll(".product-name");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector(".selected");
        selectedItem.classList.remove("selected");
        menuItem.classList.add("selected");
    });
});

const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");

left_arrow.addEventListener("click", () => {
    
})

left_arrow.addEventListener("click", () => scrollSlider("left"));
right_arrow.addEventListener("click", () => scrollSlider("right"));

function scrollSlider(direction) {
    const selectedItem = document.querySelector(".selected");
    const menuItems = document.querySelectorAll(".product-name");
    if(direction=="left"){
        menuItems.forEach((menuItem, index) => {
            if (menuItem == selectedItem & index != 0){
                wrapper.style.transform = `translateX(-${(index-1) * 100}vw)`;
                selectedItem.classList.remove("selected");
                selectedItem.previousElementSibling.classList.add("selected");
                }
            })
    }
    if(direction=="right"){
        menuItems.forEach((menuItem, index) => {
            if (menuItem == selectedItem & index != 4){
                wrapper.style.transform = `translateX(-${(index+1) * 100}vw)`;
                selectedItem.classList.remove("selected");
                selectedItem.nextElementSibling.classList.add("selected");
                }
            })
    }

}
// ******************************************************************************
