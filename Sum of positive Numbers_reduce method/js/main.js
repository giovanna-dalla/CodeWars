<<<<<<< HEAD
/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


function positiveSum(arr) {

    console.log (arr.reduce((a,b)=> a + (b > 0 ? b : 0),0));
 }

 positiveSum([1,-4,7,12]);



=======
/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


// Other solutions:

function positiveSum(arr) {

    console.log (arr.reduce((a,b)=> a + (b > 0 ? b : 0),0));
 }

 positiveSum([1,-4,7,12]);
>>>>>>> 6ae3e10a6f68050cba12ebc1fef7bd5827dc01ef
