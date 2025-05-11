let msg = `<h2>Multiplication Table</h2>`;
let userNumber = prompt("Welcome! Please enter a number between 0-10: ");

// Validating the input
if (isNaN(userNumber) || userNumber === null || userNumber === "") {
  userNumber = 0;
} else {
  if (userNumber >= 0 && userNumber <= 10) {
    userNumber = parseInt(userNumber);
  } else {
    userNumber = 0;
  }
}

// Looping through iterations
for (let i = 1; i <= 9; i++) {
  let line = `${i} * ${userNumber} = ${i * userNumber}<br>`;
  msg += line;
}

// Final output
document.getElementById("results").innerHTML = msg;
