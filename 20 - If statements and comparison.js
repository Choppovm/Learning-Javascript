functuon ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

//---------------------------------------//

// Comparson with the Equality Operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

//---------------------------------------//

// Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//---------------------------------------//

// Practice Comparing Different Values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

//---------------------------------------//

// Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

//---------------------------------------//

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

//---------------------------------------//

// Comparison with the Logical And Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

//---------------------------------------//

// Comparison with the Greater Than or Equal To operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));

//---------------------------------------//

// 
