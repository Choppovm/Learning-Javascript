// Writing Resuable with Functions
function ourResuableFunction() {
  console.log("Hello, World");
}

ourResuableFunction();

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//---------------------------------------//

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);

//---------------------------------------//

// Global Scope and Functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = ""
  if (type of myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1()
fun2()

//---------------------------------------//

// Local Scope
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
console.log(myVar);

//---------------------------------------//

// Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//---------------------------------------//

// Return a Value from a Function with Return
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

//---------------------------------------//

// Understanding Undefined Value Returned from a Function
var sum = 0
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

//---------------------------------------//

// Assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
