<<<<<<< HEAD
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str) {
    return str.slice(1, -1);
  }


//   Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
  

  function remove(string) {
    
    return string.endsWith ("!") ? string.substring(-1, string.length-1) :    string

    //you can replace the substring for slice(0,-1)
=======
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str) {
    return str.slice(1, -1);
  }


//   Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
  

  function remove(string) {
    
    return string.endsWith ("!") ? string.substring(-1, string.length-1) :    string

    //you can replace the substring for slice(0,-1)
>>>>>>> 6ae3e10a6f68050cba12ebc1fef7bd5827dc01ef
  }