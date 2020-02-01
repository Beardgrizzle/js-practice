// declare the function. This only defines it, it does not run it
function charAt(){
    // store the user's number in a variable
    let str = prompt("Last character");
    
    // any value that gets returned from `prompt` is a string,
    // so we need to turn it into a number with `parseInt`
    // we can then add 7 to it and store it in a `newNumber` variable
    let newStr = str.charAt(str.length-1);
    
    // then just return it!
    return newStr
  }
  
  // now we store the result of the `add7` function into a variable
  let lastLetter = charAt()
  
  // and alert it
  alert(lastLetter)