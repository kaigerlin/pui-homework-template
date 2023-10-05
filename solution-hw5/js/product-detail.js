
//get roll name from URL parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//update title and image
document.querySelector("h2").textContent = rolls[rollType].name;
const imgLink = rolls[rollType].imageFile;
document.querySelector(".detail-image").src="../assets/products/" + imgLink;

//set up base price for later
let basePrice = rolls[rollType].basePrice;

//load them into HTML drop down menus
for (let i = 0; i < glazePrice.length; i++) {
    var glazeOption = document.createElement('option');
    glazeOption.text = glazePrice[i].option;
    glazeOption.value = glazePrice[i].price;
    document.querySelector('#glaze-select').appendChild(glazeOption);

    var packOption = document.createElement('option');
    packOption.text = packPrice[i].size;
    packOption.value = packPrice[i].multiplier;
    document.querySelector('#size-select').appendChild(packOption);
}

//function to update price after selecting glaze
function glazingChange(element) {
    const priceChange = parseFloat(element.value);
    const multiplier = parseFloat(document.querySelector('#size-select').value);
    let totalPrice = ((basePrice + priceChange)*multiplier).toFixed(2);
    console.log(basePrice);
    console.log(priceChange);
    console.log(multiplier);
    console.log(totalPrice);
    document.querySelector('#base-price').textContent = "$ " + totalPrice;
}

//function to update price after selecting pack size
function sizeChange(element) {
  const priceChange = parseFloat(document.querySelector('#glaze-select').value);
  const multiplier = parseFloat(element.value);
  let totalPrice = ((basePrice + priceChange)*multiplier).toFixed(2);
  console.log(basePrice);
  console.log(priceChange);
  console.log(multiplier);
  console.log(totalPrice);
  document.querySelector('#base-price').textContent = "$ " + totalPrice;
}

//function to display current price
function displayPrice() {
  const priceChange = document.querySelector('#glaze-select').value;
  const multiplier = document.querySelector('#size-select').value;
  let totalPrice = ((basePrice + priceChange)*multiplier).toFixed(2);
  document.querySelector('#base-price').textContent = "$ " + totalPrice
}

displayPrice();
//record product info after 'add to cart' button is clicked
function addToCart() {
  let packSizeMenu = document.querySelector('#size-select');
  let sizeSelectedIndex = document.querySelector('#size-select').selectedIndex;
  let packSize = packSizeMenu.options[sizeSelectedIndex].text;

  let rollGlazingMenu = document.querySelector('#glaze-select');
  let glazeSelectedIndex = document.querySelector('#glaze-select').selectedIndex;
  let rollGlazing = rollGlazingMenu.options[glazeSelectedIndex].text;

  const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.add(newRoll);
  console.log(cart);
}

document.querySelector('#add-to-cart').addEventListener("click", addToCart);

