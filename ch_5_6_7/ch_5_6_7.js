var a = 2;
var b = a++ + ++a - --a + a--;
alert("The value of variable a: " + a);
alert("The value of variable a++: " + a++);
alert("The value of variable ++a: " + ++a);
alert("The value of variable --a: " + --a);
alert("The value of variable a--: " + a--);
alert("The value of variable b 'a++ + ++a - --a + a--' : " + b);