// declare the function. This only defines it, it does not run it
function multiply(){
    // store the user's number in a variable
    let number = prompt("number * number");
    
    // any value that gets returned from `prompt` is a string,
    // so we need to turn it into a number with `parseInt`
    // we can then add 7 to it and store it in a `newNumber` variable
    let newNumber2 = parseInt(number) * parseInt(number);
    
    // then just return it!
    return newNumber2
  }
  
  // now we store the result of the `add7` function into a variable
  let multiplyNumber = multiply()
  
  // and alert it
  alert(multiplyNumber)