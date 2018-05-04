/* Need to make all the basic calculator functions but it needs to be done in binary numbers
*/

var resultDisplay = document.getElementById('res');
var result = 0;

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
