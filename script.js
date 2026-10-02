let cart = [];

const buyButtons = document.querySelectorAll(".buy-button");

const cartButton = document.getElementById("cart-button");
const cartBox = document.getElementById("cart-box");

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

const clearCartButton = document.getElementById("clear-cart");


// ყიდვის ღილაკი
buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".card");

        const name = card.querySelector("h2").textContent;

        const priceText = card.querySelector(".price").textContent;

        const price = parseFloat(
            priceText.replace("₾", "").trim()
        );

        const image = card.querySelector("img").src;


        cart.push({
            name: name,
            price: price,
            image: image
        });


        updateCart();

        cartBox.classList.add("show");
    });

});


// კალათის განახლება
function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(function(product, index) {

        total += product.price;


        const item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <img src="${product.image}">

            <div class="cart-info">

                <h3>${product.name}</h3>

                <p>${product.price.toFixed(2)} ₾</p>

                <button onclick="removeFromCart(${index})">
                    ❌ წაშლა
                </button>

            </div>
        `;


        cartItems.appendChild(item);

    });


    cartTotal.textContent = total.toFixed(2);
}


// კალათიდან წაშლა
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// კალათის გახსნა / დახურვა
cartButton.addEventListener("click", function() {

    cartBox.classList.toggle("show");

});


// მთელი კალათის გასუფთავება
clearCartButton.addEventListener("click", function() {

    cart = [];

    updateCart();

});