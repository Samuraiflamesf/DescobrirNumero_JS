var numberToFind = 0;
var attempt = 0;
let alertErro = document.querySelector("#alertErro");
let alertBig = document.querySelector("#alertBig");
let alertSmall = document.querySelector("#alertSmall");
let alertSuccess = document.querySelector("#alertSuccess");
let button = document.querySelector("#btn");
let area = document.querySelector(".area");

function buttonOff() {
  button.classList.add("placeholder");
  button.classList.add("disabled");
}
function buttonOn() {
  button.classList.remove("placeholder");
  button.classList.remove("disabled");
}
function alertClean() {
  alertErro.classList.add("d-none");
  alertSmall.classList.add("d-none");
  alertBig.classList.add("d-none");
  alertSuccess.classList.add("d-none");
  area.classList.remove("shake-horizontal");
  area.classList.remove("shake-constant");
}
function refresh() {
  //Gerar o numero aleatório
  numberToFind = parseInt(Math.random() * 100);
  console.log(numberToFind);
}

function verifyNumber() {
  alertClean();
  buttonOff();
  let bet = document.querySelector("#bet").value;

  if (bet > 100 || bet < 1) {
    area.classList.remove('animate__shakeX')
    setTimeout(() => {
      area.classList.add('animate__animated')
      area.classList.add('animate__shakeX')
      alertErro.classList.remove("d-none");
    }, 500);
    buttonOn();
    return;
  } else if (bet > numberToFind) {
    attempt++;
    setTimeout(() => {
      alertSmall.classList.remove("d-none");
    }, 300);
    buttonOn();
  } else if (bet < numberToFind) {
    attempt++;
    setTimeout(() => {
      alertBig.classList.remove("d-none");
    }, 300);
    buttonOn();
  } else if (bet == numberToFind) {
    area.classList.remove('animate__rubberBand')
    setTimeout(() => {
      area.classList.add('animate__animated')
      area.classList.add('animate__rubberBand')
      alertSuccess.innerHTML = `🪐 Parabéns você acertou!!<br>  Com ${attempt} erros! 😏🥳 `;
      alertSuccess.classList.remove("d-none");
    }, 500);
    
    buttonOn();
    refresh();
  } else {
    area.classList.remove('animate__shakeX')
    setTimeout(() => {
      area.classList.add('animate__animated')
      area.classList.add('animate__shakeX')
      alertErro.classList.remove("d-none");
    }, 500);
    buttonOn();
    return;
  }
}

refresh();
