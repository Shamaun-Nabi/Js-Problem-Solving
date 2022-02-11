// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const stringMaker=(value) =>{
    if(value.length>=3){
        let newStr=value.substring(value.length-3);
        return newStr+value+newStr;
    }
    else{
        return console.log("The string length must be 3 or more");
    }
}

console.log(stringMaker("abcd"));