// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const rmvPosition = (value, position) => {
  let part1 = value.substring(0, position);
  console.log("before",part1);
  let part2 = value.substring(position+1,value.length);
  console.log("after",part2);
  return part1 + part2;
  console.log(newstr);
};
console.log(rmvPosition("khajababa", 2));
