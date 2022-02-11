// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

const stringPos = (value) => {
  if (value.length >= 2) {
    var firstChar = value.substr(0, 1);
    var lastChar = value.substr(value.length - 1);
    var part1=value.substr(1, value.length);
    var sliceBoth=part1.substr(0,part1.length-1);
    return console.log(lastChar+sliceBoth+firstChar);
  } else {
    return console.log("The string length must be greater than or equal to 1");
  }
};

// console.log(stringPos("ashik"))
stringPos("abc");
