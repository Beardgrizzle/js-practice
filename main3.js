function capitalize(){

let name = prompt("cap first letter");


let capName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
return capName;
}
let nameCap = capitalize();

alert(nameCap);