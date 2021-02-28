/* ===================================================
Code to convert any string to TitleCase
=================================================== */

// take input from the user
var inputValue = prompt("Please enter any sentence:");

function titleCase(inputValue) {
    // check input value whether it is given or not
    if ((inputValue === null) || (inputValue === ''))
        return false;
    else
    // process input value
        return inputValue.toLowerCase().split(' ').map(
            function (sentence) {
                return sentence.replace(sentence[0], sentence[0].toUpperCase());
            }).join(' ');
}

inputValue = titleCase(inputValue);
console.log(inputValue);

/* ===================================================
Code to find factorial of any given positive number
=================================================== */
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}