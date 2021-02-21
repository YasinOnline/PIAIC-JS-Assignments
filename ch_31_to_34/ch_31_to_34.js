var fullName = prompt("Enter your full name.");
var day = parseInt(prompt("Enter date of your birthday."));
var month = parseInt(prompt("Enter month of your birthday.") - 1);
var year = parseInt(prompt("Enter year of your birthday."));

var todayDate = new Date();
var birthDate = new Date(year, month, day);

var dateDiff = todayDate - birthDate;

var oneDay = 1000 * 60 * 60 * 24;
var oneHour = 1000 * 60 * 60;

var age = todayDate.getFullYear() - birthDate.getFullYear();
var days = Math.round(dateDiff / oneDay);
var hours = Math.round(dateDiff / oneHour);

// Good Moring, Good Noon, Good Evening Message
var hr = todayDate.getHours();
var message = "";
if (hr >= 0 && hr < 12) {
    message = "Good Morning!";
} else if (hr == 12) {
    message = "Good Noon!";
} else if (hr >= 12 && hr <= 17) {
    message = "Good Afternoon!"
} else {
    message = "Good Evening!";
}

console.log(`Hello ${fullName}, ${message}`);
console.log(`Your DOB is ${birthDate}`);
console.log(`You are ${age} years old.`);
console.log(`Your age in days: ${days}`);
console.log(`Your age in hours: ${hours}`);

// Number of days to until birtday calculation.
var birthDay = new Date(todayDate.getFullYear(), month, day);
if (todayDate.getMonth() == month && todayDate.getDate() > day) {
    birthDay.setFullYear(birthDay.getFullYear() + 1);
}

if (todayDate.getMonth() == month && todayDate.getDate() == day) {
    console.log(`Happy Birthday ${fullName}!`);
} else {
    console.log(Math.ceil((birthDay.getTime() - todayDate.getTime()) / (oneDay)) + " days left until your birthday!");
}