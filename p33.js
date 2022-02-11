// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const numberRange = (first, second) => {
  if (
    (first >= 40 && first <= 60 && second >= 40 && second <= 60) ||
    (first >= 70 && first <= 100 && second >= 70 && second <= 100)
  ) {
    return "In range";
  } else {
    return "not in range";
  }
};

console.log(numberRange(44, 56));
console.log(numberRange(70, 95));
console.log(numberRange(50, 89));
console.log(numberRange(66,69));
console.log(numberRange(71,69));
console.log(numberRange(71,80));
