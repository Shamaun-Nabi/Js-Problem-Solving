// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

const largerNumber=(first,second)=>{
    if(first==second){
        return "They are same Number,Same Number Not Allowed\n for this program"
    }
    else if(first>=40 && first<=60 && second>=40 && second<=60){
        if(first>second){
            return first;
        }
        else{
            return second;
        }
    }
    else{
        return "Number Not Fit"
    }
}
console.log(largerNumber(45, 60));
console.log(largerNumber(25, 60));
console.log(largerNumber(45, 80));
console.log(largerNumber(80, 80));
