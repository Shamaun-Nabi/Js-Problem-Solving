// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const absDiff = (value) => {
  if (value >= 19) {
    return 3 * (value - 19);
  } else {
    return 19 - value;
  }
};

console.log(absDiff(22))