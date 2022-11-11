

// Exercise descriprition

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


/*map() method creates a new array populated with the results of calling a provided function on every element in the calling array.*/

function points(games){
    let sum = 0;
    games.map(x => {
        if (x[0] === x[2]) { //if x = y: 1 point (tie)
            sum +=1;
        } else if (x[0] > x[2]){   // if x > y: 3 points (win)
            sum += 3;
        }
    }) ;
  
    console.log(sum);
}

//function call with arrays

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]);
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]);
points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]);
points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]);