// declare the function. This only defines it, it does not run it
function add7(){
    // store the user's number in a variable
    let number = prompt("add 7");
    
    // any value that gets returned from `prompt` is a string,
    // so we need to turn it into a number with `parseInt`
    // we can then add 7 to it and store it in a `newNumber` variable
    let newNumber = 7 + parseInt(number);
    
    // then just return it!
    return newNumber
  }
  
  // now we store the result of the `add7` function into a variable
  let numberAdd7 = add7()
  
  // and alert it
  alert(numberAdd7)