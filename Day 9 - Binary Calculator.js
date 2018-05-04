/* Need to make all the basic calculator functions but it needs to be done in binary numbers
*/

var resultDisplay = document.getElementById('res');
var result = 0;
var operators = "";

//Btn0 Click
function zeroClicked() {
    resultDisplay.innerHTML += "0";
}

//Btn1 Click 
function oneClicked() {
    resultDisplay.innerHTML += "1";
}

//BtnClr Click
function clearDisplay() {
    resultDisplay.innerHTML = "";
} 

//BtnSum Click
function sumClicked() {
    operators = "+"
    result = parseInt(resultDisplay.innerHTML, 2);
    resultDisplay.innerHTML += "+"; 
}

//BtnSub Click
function subtractClicked() {
    operators = "-"
    result = parseInt(resultDisplay.innerHTML, 2);
    resultDisplay.innerHTML += "-"; 
}

//BtnMul Click
function multiplyClicked() {
    operators = "*"
    result = parseInt(resultDisplay.innerHTML, 2);
    resultDisplay.innerHTML += "*"; 
}


//BtnDiv Click
function divideClicked() {
    operators = "/"
    result = parseInt(resultDisplay.innerHTML, 2);
    resultDisplay.innerHTML += "/"; 
}

