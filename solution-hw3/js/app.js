let glazePrice = [
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

let packPrice = [
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

let basePrice = 2.49;

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

function displayPrice() {
  const priceChange = document.querySelector('#glaze-select').value;
  const multiplier = document.querySelector('#size-select').value;
  let totalPrice = ((basePrice + priceChange)*multiplier).toFixed(2);
  document.querySelector('#base-price').textContent = "$ " + totalPrice
}

displayPrice();
  