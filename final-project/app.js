var proInfo = [];

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function toggleSwitch(toggleContainer) {
  toggleContainer.classList.toggle('active');
  const circle = toggleContainer.querySelector('.toggle-circle');
}

function toSelectionPage() {
  window.location.href = "selections.html";
}

function storeInput() {
  var profession = document.getElementById("profession").value;
  proInfo[0] = profession;
  const proInfoString = JSON.stringify(proInfo);
  localStorage.setItem('storedInfo', proInfoString);
}

function retrieveFromLocalStorage() {
  if (localStorage.getItem('storedInfo') != null) {
    const proInfoString = localStorage.getItem('storedInfo');
    proInfo = JSON.parse(proInfoString);
    console.log(proInfo);
  }
}

function storeAndSelect() {
  storeInput();
  toSelectionPage();
}

function storeScores() {
  let counter = 0;
  
  let skill = document.getElementById("1");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  skill = document.getElementById("2");
  if (skill.classList.toggle('active')) {
    counter = counter + 2;
  }

  skill = document.getElementById("3");
  if (skill.classList.toggle('active')) {
    counter = counter + 2;
  }

  skill = document.getElementById("4");
  if (skill.classList.toggle('active')) {
    counter = counter + 1;
  }
  
  skill = document.getElementById("5");
  if (skill.classList.toggle('active')) {
    counter = counter + 1;
  }

  skill = document.getElementById("6");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  skill = document.getElementById("7");
  if (skill.classList.toggle('active')) {
    counter = counter + 2;
  }

  skill = document.getElementById("8");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  skill = document.getElementById("9");
  if (skill.classList.toggle('active')) {
    counter = counter + 2;
  }

  skill = document.getElementById("10");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  skill = document.getElementById("11");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  skill = document.getElementById("12");
  if (skill.classList.toggle('active')) {
    counter = counter + 1;
  }

  skill = document.getElementById("13");
  if (skill.classList.toggle('active')) {
    counter = counter + 1;
  }

  skill = document.getElementById("14");
  if (skill.classList.toggle('active')) {
    counter = counter + 2;
  }

  skill = document.getElementById("15");
  if (skill.classList.toggle('active')) {
    counter = counter + 1;
  }

  skill = document.getElementById("16");
  if (skill.classList.toggle('active')) {
    counter = counter + 3;
  }

  counter = 32 - counter;
  console.log(counter);
  proInfo[1] = counter;

  if (counter <= 8) {
    proInfo[2] = "HIGH";
  }
  else if (counter > 8 && counter <= 11) {
    proInfo[2] = "MEDIUM";
  }
  else {
    proInfo[2] = "LOW";
  }

  const proInfoString = JSON.stringify(proInfo);
  localStorage.setItem('storedInfo', proInfoString);
}

function replaceResultText() {
  document.getElementById('jobText').innerHTML = proInfo[0];
  document.getElementById("scoreText").innerHTML = proInfo[2];

  if (proInfo[2] === "LOW") {
    document.querySelector("h5").style.color = "rgba(56, 223, 136)";
  }
  else if (proInfo[2] === "MEDIUM") {
    document.querySelector("h5").style.color = "rgba(255, 210, 63)";
  }
}