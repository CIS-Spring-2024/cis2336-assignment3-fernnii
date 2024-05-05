
let menuItems = [
    { name: "Tacos de Bistec|Al Pastor|Birria", price: 1.49, category: "Tacos", image: "tacos.jpg" },
    { name: "Birria Tacos", price: 1.99, category: "Tacos", image: "birria.jpg" },
    { name: "Fajita Quesadilla", price: 6.99, category: "Quesadilla", image: "quesadilla.jpg" },
    { name: "Burrito with Fajita|Bistec|Al Pastor", price: 6.99, category: "Burrito", image: "burrito.jpg" },
    
];

// Function to display menu items
function displayMenu(items) {
    const menuContainer = document.querySelector("#menu .menu-items");
    menuContainer.innerHTML = "";

    items.forEach(item => {
        const menuItem = createMenuItem(item);
        menuContainer.appendChild(menuItem);
    });
}


function createMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `$${item.price.toFixed(2)}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => addToCart(item));

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(addToCartButton);

    return menuItem;
}



displayMenu(menuItems);

// Filtering function
document.getElementById("filter").addEventListener("change", function() {
    const category = this.value;
    const filteredItems = menuItems.filter(item => category === "All" || item.category === category);
    displayMenu(filteredItems);
});

// Sorting function
document.getElementById("sort").addEventListener("change", function() {
    const sortBy = this.value;
    let sortedItems = [];

    if (sortBy === "PriceLowToHigh") {
        sortedItems = menuItems.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "PriceHighToLow") {
        sortedItems = menuItems.slice().sort((a, b) => b.price - a.price);
    }

    displayMenu(sortedItems);
});

// Search function
document.getElementById("search").addEventListener("input", function() {
    const query = this.value.trim().toLowerCase();
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query));
    displayMenu(filteredItems);
});


function addToCart(item) {
    const cartItem = { id: item.id, name: item.name, price: item.price };
    cart.push(cartItem);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartContainer = document.querySelector("#cart .cart-items");
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(cartItem);
    });
}

// Initialize cart
let cart = [];

// Initial display of menu items
displayMenu(menuItems);


// Function to handle checkout
function checkout() {
    alert("Proceeding to checkout...");
}

// Event listener for checkout button
document.getElementById("checkout-button").addEventListener("click", checkout);

// Function to handle clearing the cart
function clearCart() {
    cart = []; 
    updateCart(); 
}

// Event listener for clear cart button
document.getElementById("clear-cart-button").addEventListener("click", clearCart);
