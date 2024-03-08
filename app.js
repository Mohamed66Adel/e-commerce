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

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);

        // product.addEventListener("click", () => {
        //     wrapper.style.transform = `translateX(-${(product.id-1) * 100}vw)`;
        //     const selectedItem = document.querySelector(".selected");
        //     selectedItem.classList.remove("selected");
        //     const menuItems = document.querySelectorAll(".product-name");
        //     menuItems.forEach((Item, index) => {
        //         if (index === product.id -1){
        //             Item.classList.add("selected");
        //         }
        //     });
        // });
        
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});
