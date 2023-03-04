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

