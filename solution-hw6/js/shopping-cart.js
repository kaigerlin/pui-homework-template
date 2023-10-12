retrieveFromLocalStorage();

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
    console.log(cart);

    const cartArray = Array.from(cart);
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('storedRolls', cartArrayString);
}

function updateTotalPrice() {
    totalCartPrice = 0;
    for (let roll of cart) {
        totalCartPrice = totalCartPrice + parseFloat(roll.totalPrice);
    }
    totalCartPrice = totalCartPrice.toFixed(2);
    const totalCartPriceElement = document.querySelector("#cart-total-price");
    totalCartPriceElement.innerText = "$ " + totalCartPrice;
}

