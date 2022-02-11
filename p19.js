// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

const checkNumber = (value) => {
  if ((value >= 20 && value <= 100) || value >= 400) {
    return true;
  }
  else{
      return false;
  }
};
console.log(checkNumber(10));
console.log(checkNumber(90));
console.log(checkNumber(99));
console.log(checkNumber(199));
console.log(checkNumber(200));
