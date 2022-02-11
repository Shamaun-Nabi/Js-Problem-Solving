// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

const getDiff = (value) => {
  if (value >= 13) {
    const afterdiff = value - 13;
    return afterdiff * 2;
  } else {
    return 13-value;
  }
};

console.log(getDiff(36));
console.log(getDiff(25));
