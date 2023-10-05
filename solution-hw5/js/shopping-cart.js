//setup cart
let originalRoll = new Roll("Original", "Sugar milk", "1", 2.49);
let walnutRoll = new Roll("Walnut", "Vanilla milk", "12", 3.49);
let raisinRoll = new Roll("Raisin", "Sugar milk", "3", 2.99);
let appleRoll = new Roll("Apple", "Keep original", "3", 3.49);

cart.add(appleRoll);
cart.add(raisinRoll);
cart.add(walnutRoll);
cart.add(originalRoll);

let totalCartPrice = 0;

function createElement(roll) {
    const template = document.querySelector("#cart-template");
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-container");

    const rollListElement = document.querySelector("#cart-list");
    rollListElement.prepend(roll.element);

    const rollNameElement = roll.element.querySelector("#cart-roll-name");
    rollNameElement.innerText = rolls[roll.type].name;

    const rollGlazingElement = roll.element.querySelector("#cart-roll-glazing");
    rollGlazingElement.innerText += " " + roll.glazing;

    const rollSizeElement = roll.element.querySelector("#cart-roll-size");
    rollSizeElement.innerText += " " + roll.size;

    const rollTotalPriceElement = roll.element.querySelector("#cart-roll-price");
    rollTotalPriceElement.innerText += " " + roll.totalPrice;

    const rollImageElement = roll.element.querySelector("#cart-roll-image");
    rollImageElement.src = "../assets/products/" + rolls[roll.type].imageFile;

    const removeButton = roll.element.querySelector("#remove-button");
    removeButton.addEventListener("click", () => {removeElement(roll);});

    updateTotalPrice();
}

for (let roll of cart) {
    createElement(roll);
}

function removeElement(roll) {
    roll.element.remove();
    cart.delete(roll);
    updateTotalPrice();
}

function updateTotalPrice() {
    totalCartPrice = 0;
    for (let roll of cart) {
        totalCartPrice = totalCartPrice + parseFloat(roll.totalPrice);
    }
    totalCartPrice = totalCartPrice.toFixed(2);
    const totalCartPriceElement = document.querySelector("#cart-total-price");
    totalCartPriceElement.innerText = "$ " + totalCartPrice;
    console.log(cart);
}

