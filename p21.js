// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
const checkPy=(value)=>{
    if(value.startsWith("Py")==true){
        return value;
    }
    else{
        return "Py"+value;
    }
}
console.log(checkPy("Python"));
console.log(checkPy("thon"));
