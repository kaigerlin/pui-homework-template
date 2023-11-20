const rolls = {
    "Original": {
        "name": "Original Cinnamon Roll",
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "name": "Apple Cinnamon Roll",
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "name": "Raisin Cinnamon Roll",
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "name": "Walnut Cinnamon Roll",
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "name": "Double Chocolate Cinnamon Roll",
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "name": "Strawberry Cinnamon Roll",
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
  };

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

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    const glazePriceSelected = glazePrice.find(obj => obj.option === this.glazing).price;
    const packPriceSelected = packPrice.find(obj => obj.size === this.size).multiplier;
    this.totalPrice = ((this.basePrice + glazePriceSelected) * packPriceSelected).toFixed(2);
    this.element = null;
    }
}

var cart = new Set();

function retrieveFromLocalStorage() {
  if (localStorage.getItem('storedRolls') != null) {
    const cartArrayString = localStorage.getItem('storedRolls');
    const cartArray = JSON.parse(cartArrayString);
    cart = new Set(cartArray);
    console.log(cart);
  }
  else {
    cart.clear();
    console.log(cart);
  }
}
