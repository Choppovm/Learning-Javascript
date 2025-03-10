var ourString = "I come first. " + "I come second.";
console.log(ourString)

var myString = "This is the start. " + "This is the end.";
console.log(myString)

// Concatenation can also be used with +=:
var secondString = "I come first. ";
secondString += "I come second.";
console.log(secondString)

// Concatenation can also be done with variables:

var myName = "Charlie";
var myNamedString = "Hello, our name is " + myName + ", how are you?";
console.log(myNamedString)

// This can also be done as:
var anAdjective = "awesome!";
var aString = "Charlie is ";
aString += anAdjective;
console.log(aString)
