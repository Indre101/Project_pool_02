const input = document.querySelector("input");
const btn1 = document.querySelector("button");
const msg = document.getElementById("msg");

/// computer value

let computerNumber = Math.floor(Math.random() * 100);


// assigning user value

btn1.onclick = function () {

  let userValue;
  if (input.value < 0 || input.value > 100) {
    msg.textContent = "Please write number between 0 and a 100";
    input.value = "";

  } else if (input.value < computerNumber) {
    userValue = input.value
    msg.textContent = `Your guess was ${userValue} and Computer's guess was ${computerNumber}, so guess higher`;
    input.value = "";

  } else if (input.value > computerNumber) {
    userValue = input.value
    msg.textContent = `Your guess was ${userValue} and Computer's guess was ${computerNumber}, so guess lower`;
    input.value = "";
  } else {
    userValue = input.value
    msg.textContent = `You think same as computer You both guessed ${computerNumber}`;
    input.value = "";
  }
}