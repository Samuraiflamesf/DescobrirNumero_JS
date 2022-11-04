var numberToFind = 0;
var attempt = 0;

function buttonOff() {
  document.querySelector("#btn").classList.add("placeholder");
  document.querySelector("#btn").classList.add("disabled");
}
function buttonOn() {
  document.querySelector("#btn").classList.remove("placeholder");
  document.querySelector("#btn").classList.remove("disabled");
}
function alertClean() {
  document.querySelector("#alertBig").classList.add("d-none");
  document.querySelector("#alertSmall").classList.add("d-none");
  document.querySelector("#alertErro").classList.add("d-none");  
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
  console.log(bet);

  if (bet > 100 || bet < 1) {
    document.querySelector("#alertErro").classList.remove("d-none");
    buttonOn()
    return;
  }
  if (bet > numberToFind) {
    attempt++;
    setInterval(()=>{
      document.querySelector("#alertBig").classList.remove("d-none");
      buttonOn()
    },2000)
  }
  if (bet < numberToFind) {
    attempt++;
    setInterval(()=>{
      document.querySelector("#alertSmall").classList.remove("d-none");
      buttonOn()
    },2000)
  }
  else{
    console.log(attempt);
    let alertSucess =    document.querySelector("#alertSuccess")
    alertSucess.innerHTML('🪐 Parabéns você acertou!! Com '+attempt+' erros!');
    alertSucess.classList.remove

  }
}

refresh();
