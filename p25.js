// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const testMultiple = (value) => {
  if (value > 0) {
    if (value % 3 == 0 || value % 7 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Negetive";
  }
};
console.log(testMultiple(11));
