<<<<<<< HEAD


function evenAndOdds(array) { 
    let even=[]; let odd=[];
    for (let i =0; i<array.length; i++){
        if (array[i]%2===0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }
    }
    console.log([even,odd])
}

=======
let array = [1,2,3,4,5,6,7,8,9]

function evenAndOdds(array) { 
    let even=[]; let odd=[];
    for (let i =0; i<array.length; i++){
        if (array[i]%2===0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }
    }
    console.log([even,odd])
}

>>>>>>> 6ae3e10a6f68050cba12ebc1fef7bd5827dc01ef
