// Write a JavaScript program to find the largest of three given integers.

const largerNumber = (first, second, third) => {
  if (first > second && first > third) {
    return first;
  } else if (second > first && second > third) {
    return second;
  } else {
    return third;
  }
};

console.log(largerNumber(14,20,16));