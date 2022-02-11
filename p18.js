// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const testFifty = (first, second) => {
  var sum = first + second;
  if (first == 50 || second == 50 || sum == 50) {
    return true;
  } else {
    return false;
  }
};

console.log(testFifty(30,20));
