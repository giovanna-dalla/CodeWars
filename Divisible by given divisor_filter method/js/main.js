
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.


function divisibleBy(numbers, divisor){
    
   console.log(numbers.filter ((elem) => elem % divisor === 0)) 
}

divisibleBy ([1,2,3,4,5,6],2);