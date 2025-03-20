// Storing Multiple Values with Arrays
var ourArray = ["John", 23]

var myArray = ["Charlie", 17];

//---------------------------------------//

// Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23], ["White Sox", 45]];

//---------------------------------------//

// Access Array Data with Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70];
var myData = myArray[2];
console.log(myData);

//---------------------------------------//

// Modify Array Data With Indexes
var ourArray = [18,64,99];
ourArray[1] = 45;

var myArray = [18,64,99];
myArray[0] = 45

//---------------------------------------//

// Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14]];
var myData = myArray[0][0];
console.log(myData);

var myData = myArray[2][0];
console.log(myData);

var myData = myArray[2][2];
console.log(myData);

//---------------------------------------//

// Manipulate Arrays with push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"])

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//---------------------------------------//

// Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
console.log(removedFromOurArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop;
console.log(myArray);
console.log(removedFromMyArray);

//---------------------------------------//

// Manipulate Arrays with shift()
var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

//---------------------------------------//

// Manipulate Arrays with unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//---------------------------------------//

// Stand in Line

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console,log("After: " + JSON.stringify(testArr));
