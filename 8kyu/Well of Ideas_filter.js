// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let count = [];
  count = x.filter(el => el == 'good').length 
    if (count == 1 || count == 2){
      return ('Publish!')
    } else if ( count >2 ){
      return ("I smell a series!")
        }else if (count == 0){
      return ('Fail!')
    }
  }
 //OR

  const  well = x => {
    let count = x.filter(el => el == 'good').length
    return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
  }