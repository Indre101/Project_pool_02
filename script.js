const input = document.querySelector("input");
const btn1 = document.querySelector("button");
const msg = document.getElementById("msg");


/// computer value
const computerValue = () => {
  let computerNumber = Math.floor(Math.random() * 100);
  return computerNumber
}

document.addEventListener("keydown", keyStroked);


btn1.onclick = function () {

  if (input.value === "") {
    msg.textContent = "Please enter a number"
  } else {
    valueCompare();
  }
}



function keyStroked(e) {

  if ((input.value === "" && e.which === 13) || (input.value === "" && e.which === 32)) {

    msg.textContent = "Please enter a number"
  } else {
    switch (e.which) {
      case 13:
        valueCompare();
        break;
      case 32:
        valueCompare();
        break;

    }
  }
}


function valueCompare() {

  let userValue;
  if (input.value < 0 || input.value > 100) {
    msg.textContent = "Please write number between 0 and a 100";
    input.value = "";

  } else if (input.value < computerValue()) {
    userValue = input.value
    msg.textContent = `Your guess was ${userValue} and Computer's guess was ${computerValue()}, so guess higher`;
    input.value = "";

  } else if (input.value > computerValue()) {
    userValue = input.value
    msg.textContent = `Your guess was ${userValue} and Computer's guess was ${computerValue()}, so guess lower`;
    input.value = "";
  } else {
    userValue = input.value
    msg.textContent = `You think same as computer You both guessed ${computerValue()}`;
    input.value = "";
  }
}