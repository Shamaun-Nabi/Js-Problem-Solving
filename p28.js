// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

const checkNumber = (first, second) => {
  if ((first > 50 && first < 100) || (second > 50 && second < 100)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumber(51, 88));
