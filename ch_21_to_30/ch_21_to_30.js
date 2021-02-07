var num = parseFloat(prompt("Enter a decimal number:   "));
alert("Your entered number is:   " + num + "\nWhich has been rounded to " + Math.ceil(num) + " now.");

var text = "A quick clever brown fox jumps right over the lazy dog.";
var str = text.slice(0, num);
alert("Following is sliced text:\n" + str);

let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}
alert(newString);