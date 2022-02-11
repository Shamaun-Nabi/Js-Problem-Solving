// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

const specifiedChar = (value, charpos) => {
  let ctr = 0;
  for (let i = 0; i <= value.length; i++) {
    if (value.charAt(i) == charpos && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) {
    return true;
  } else {
    return false;
  }
};
console.log(specifiedChar("Python", "y"));
console.log(specifiedChar("JavaScript", "S"));
