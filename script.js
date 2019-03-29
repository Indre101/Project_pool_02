const input = document.querySelector("input");
const btn1 = document.querySelector("button");
const msg = document.getElementById("msg");

/// computer value
function randomComputerNumber() {

  let computerNumber = Math.floor(Math.random() * 100);
  return computerNumber;

}

// assigning user value

btn1.onclick = function () {

  let userValue;


  if (input.value < 0 || input.value > 100) {
    msg.textContent = "Please write number between 0 and a 100";
    input.value = "";


  } else if () {
    userValue = input.value

  }
  console.log(userValue)
}