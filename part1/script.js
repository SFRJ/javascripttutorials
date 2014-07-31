//Printing a message in the browsers console
console.log("Hello World");

//Delcarins and using variables
var name = "Djordje";
console.log("My name is " + name);

//Javascript is a dynamically tiped language.
//It does not need to be told what are the data types(variables can hold any type we want).
var age = 28;
console.log("I am " + age + " years old");

//When working with a dynamically typed language like Javascript, concatenation of numbers will automatically
//be understood as an arithmetic operation
var a = 1;
var b = 2;
console.log(a + b);

//But if we combine the numbers with other datatype(e.g text), it will understand it as text.
console.log("a + b = " + a + b + " because I am treating it as text");

//Often temporary variables are used to keep gather metaresults for when we want to combine them with other data
var sum = a + b;
console.log("a + b = " + sum + " because I am storing the metaresult in a temporary variable");

//booleans values can also be stored in variables
var theSkyIsBlue = true;
var javascriptIsDifficult = false;

console.log("The sky is blue: " + theSkyIsBlue);
console.log("Javascript is difficult: " + javascriptIsDifficult);

//If we declare a variable but we never assign a value to it, it will be understood as 'undefined'
var justAVariableWithNoValue;
console.log(justAVariableWithNoValue);

//Basic arithmetic operations
var firstNumber = 3;
var secondNumber = 5;
//addition
console.log(firstNumber + secondNumber);
//substraction
console.log(firstNumber - secondNumber);
//multiplication
console.log(firstNumber * secondNumber);
//division
console.log(firstNumber / secondNumber);

//Conditional statements allow a block of code to execute a block of code only if certain true/false criteria is meet.
//some other statements that can be used in the if statements are: && || == !- < > <= >=
var hungry = true;
if(hungry) {
    console.log("eat");
}
//Some other examples of conditional operators
var equallity = true == true;
console.log("true == true is " + equallity);

var nonEquallity = true != false;
console.log("true != false is " + equallity);

var and = true && true;
console.log("true && true is " + and);

var or = true || true;
console.log("true || true is " + or);

var aSmallerThanb = a < b;
console.log(a + "<" + b + " is " + aSmallerThanb);

var bGreaterThana = b > a;
console.log(b + ">" + a + " is " + aSmallerThanb);

var negation = "bannana" != "pear";
console.log("bannana != pear is " + negation);

//If estatements can be complemented with an else part which will be executed only if the if doesn't apply
var isRaining = true;
if(isRaining) {
    console.log("Take an umbrella!");
} else {
    console.log("You don't need an umbrella today!");

}

//Instructions can semantically organized in functions that can be reused multiple times
function salute() {
    console.log("Hello!");
}
//The functions will execute only if they are called
salute();

//Functions can take parameters
function saluteToPerson(personName) {//Note that the variable in the parameter does not need the keyword 'var'
    console.log("Hello " + personName);
}

saluteToPerson("Djordje");

//Popups are very popular in javascript.
function welcomePopup() {
    alert("Welcome to this website");
}
//lets trigger this popup(just uncomment the line below)
//welcomePopup();

//remember that functions can be called inside other functions and be reused
functionThatCallsAFunction("djordje");
function functionThatCallsAFunction(personName) {
    salute() + console.log(" " + personName);
}

//Note: Note that in the previous example I used a function before declaring it. You can do this with functions, but
//you cannot do this with variables(You must declare the variables before you use them).

//functions can accept multiple arguments
function sumNumbers(a,b) {
    console.log(a + b);
}

sumNumbers(2,2);

//functions can return values to other functions
function returningValueFunction(a,b) {
    var result = "the result is " + a + b;
    return result;
}
console.log(returningValueFunction(5,5));
//Note: Scope means where the variables can be used.
//If they are declared inside a function, they can just be used within the function(We call this local scope)
//If they are declared within the file, they can just be used in all the file.


/*
Practice exercise, build a program that uses the concepts mentioned before.
Try to use conditional statements variables and functions...
*/