// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

const frontBack = (value) => {
  let firsChar = value.charAt(0);
  let newStr = firsChar + value + firsChar;
  return newStr;
};
console.log(frontBack("Swift"));
