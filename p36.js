// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const matchNumber = (first, second, third) => {
  if (
    first % 10 == second % 10 &&
    second % 10 == third % 10 &&
    first % 10 == third % 10
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(matchNumber(10, 20, 30));
