// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const stringMatch = (value) => {
    if (value.toLowerCase().substring(4, 10) == "script") {
        return value.substring(0, 4)+ value.substring(10,value.length);
    } else {
        return value;
    }
};

console.log(stringMatch("JavaCoffeJava"));
console.log(stringMatch("JavaScriptJava")); //Remove Script 