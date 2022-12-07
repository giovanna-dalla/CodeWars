// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    //square each number in the array
    //sum the result of the above
      
      return numbers.map(element => Math.pow(element,2)).reduce((acc,c) => acc+c,0)
      
      
    }

squareSum([1,2,3,4])