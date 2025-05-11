let msg = `<h2>Multiplication Table</h2>`;
let userNumber = prompt("Welcome! Please enter a number: ");

// Verifying the input is an integer
if (isNaN(userNumber) || userNumber === null || userNumber === "") {
    userNumber = 0;
} else {
    userNumber = parseInt(userNumber);
}

// Looping through nine iterations
for (let i = 1; i <= 9; i++) {
    let line = `${i} * ${userNumber} = ${i * userNumber}<br>`;
    msg += line;
}

// Final output
document.getElementById('results').innerHTML = msg;
