// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const stringChecking = (values) => {
  let lower = values.toLowerCase();
  if (lower.startsWith("java") == true) {
    return true;
  } else {
    return false;
  }
};

console.log(stringChecking("Javython"));
