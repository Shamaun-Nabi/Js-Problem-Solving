// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
const nearestValue = (first, second) => {
  let firstDiff = 100 - first;
  let secondDiff = 100 - second;
  if (firstDiff < secondDiff) {
    return first;
  } else {
    return second;
  }
};
console.log(nearestValue(90, 89));
console.log(nearestValue(89, 90));
console.log(nearestValue(-90, -89));
