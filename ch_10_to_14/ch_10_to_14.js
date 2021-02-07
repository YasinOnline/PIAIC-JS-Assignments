// Simple Math Calculator
function calculator() {
    var num1 = parseInt(prompt("Enter the any first number: "));
    var num2 = parseInt(prompt("Ener the any second number: "));
    var operator = prompt("Enter the operation sign: ");

    let result;
    if (operator == "+") {
        result = num1 + num2;
        alert("The result is:   " + num1 + " + " + num2 + " = " + result);
    } else if (operator == "-") {
        result = num1 - num2;
        alert("The result is:   " + num1 + " - " + num2 + " = " + result);
    } else if (operator == "*") {
        result = num1 * num2;
        alert("The result is:   " + num1 + " * " + num2 + " = " + result);
    } else if (operator == "/") {
        result = num1 / num2;
        alert("The result is:   " + num1 + " / " + num2 + " = " + result);
    } else {
        alert("Please enter a proper operator. It can be one of following symbols. \n +  -  *  / \n Click on 'Calculator' button to run program again.\n\n Thank you.")
    }
}

// Percentage Calculator
function percentage() {
    var course1 = parseInt(prompt("Enter obtained marks from 1st course:  "));
    var course2 = parseInt(prompt("Enter obtained marks from 2nd course:  "));
    var course3 = parseInt(prompt("Enter obtained marks from 3rd course:  "));
    var course4 = parseInt(prompt("Enter obtained marks from 4th course:  "));
    var course5 = parseInt(prompt("Enter obtained marks from 5th course:  "));
    let obtainedMarks = course1 + course2 + course3 + course4 + course5;
    let totalMarks = 500;
    let percent;
    percent = obtainedMarks * 100 / totalMarks
    alert("Your obtained percentage is:   " + percent);
}
