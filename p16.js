// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
const sumFactory=(firstInt,secondInt)=>{
    let sum=0;
    if(firstInt==secondInt){
        let newSum=3*(firstInt+secondInt);
        return newSum;
    }
    else{
        return firstInt+secondInt;
    }
}

console.log(sumFactory(20,20))