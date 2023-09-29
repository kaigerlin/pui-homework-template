
//get roll name from URL parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//update title and image
document.querySelector("h2").textContent = rolls[rollType].name;
const imgLink = rolls[rollType].imageFile;
document.querySelector(".detail-image").src="../assets/products/" + imgLink;

//setup cart and base price for later
const cart = [];
let basePrice = rolls[rollType].basePrice;

//create an object for glaze options
const glazePrice = [
  {
    option: 'Keep original',
    price: 0,
  },
  {
    option: 'Sugar milk',
    price: 0,
  },
  {
    option: 'Vanilla milk',
    price: 0.5,
  },
  {
    option: 'Double chocolate',
    price: 1.5,
    },
];

//create an object for pack size options
const packPrice = [
  {
    size: "1",
    multiplier: 1,
  },
  {
    size: "3",
    multiplier: 3,
  },
  {
    size: "6",
    multiplier: 5,
  },
  {
    size: "12",
    multiplier: 10,
  },
];

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

//define class called roll
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
  this.type = rollType;
  this.glazing = rollGlazing;
  this.size = packSize;
  this.basePrice = basePrice;
  }
};

//record product info after 'add to cart' button is clicked
function addToCart() {
  let packSizeMenu = document.querySelector('#size-select');
  let sizeSelectedIndex = document.querySelector('#size-select').selectedIndex;
  let packSize = packSizeMenu.options[sizeSelectedIndex].text;

  let rollGlazingMenu = document.querySelector('#glaze-select');
  let glazeSelectedIndex = document.querySelector('#glaze-select').selectedIndex;
  let rollGlazing = rollGlazingMenu.options[glazeSelectedIndex].text;

  const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.push(newRoll);
  console.log(cart);
}

document.querySelector('#add-to-cart').addEventListener("click", addToCart);

