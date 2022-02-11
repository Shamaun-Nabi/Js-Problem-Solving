// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

const validation=(value,second)=>{
    if (value<0 && second>0 || value>0 && second<0){
        return "negetive & positive available";
    }
    else{
        return "both are positive";
    }
}
console.log(validation(10,20))
console.log(validation(10,-30))