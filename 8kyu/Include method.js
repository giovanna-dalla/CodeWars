<<<<<<< HEAD

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    return a.includes(x)
    }


// solution with arrow function

const check = (a,x) => a.includes(x);

// for loop

function check(a, x) {
    for (let i=0; i <a.length; i++){
      if(a[i]===x){
        return true
      }
    }
  return false
  }

=======

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    return a.includes(x)
    }


// solution with arrow function

const check = (a,x) => a.includes(x);

// for loop

function check(a, x) {
    for (let i=0; i <a.length; i++){
      if(a[i]===x){
        return true
      }
    }
  return false
  }

>>>>>>> 6ae3e10a6f68050cba12ebc1fef7bd5827dc01ef
