// Trying to run the following simply will not work:
var myString = "I am a "double quoted" string inside "double quotes"";

// To fix this, put a backslash [\] before every double quote ["]
var myString = "I am a \"dobule quoted\" string inside \"double quotes\"";

console.log(myString)

// We can also avoid situations like these with single quotes:
var mySecondString = "<a href="http://www.example.com" target="_blank">Link</a>"; // this will not work
var mySecondString = '<a htef="http://www.example.com" target="_blank">Link"/a>'; // this will work. Notice how we use a single quote rather than a double.
