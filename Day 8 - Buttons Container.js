var button = document.getElementById("btn");
var buttonCount = parseInt(button.innerHTML);
console.log(buttonCount);
var value = 0;
function incrementCount() {    
    value++
    button.innerHTML = value;
}