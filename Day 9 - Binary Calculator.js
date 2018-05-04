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

//Function to get index of selected operator
function getIndex(operator) {
    var index = (resultDisplay.innerHTML).indexOf(operator);
    return index;
}

//Function to select strings
function subString(i) {
    var string = parseInt((resultDisplay.innerHTML.substring(i+2), 2));
    return string;
}

//BtnEql switch case to determine which operators were used and which function to perform. It then displays the results converted to binary 
function equalClicked() {
    var answer = 0;
    switch (operators) {
        case '+':
            x = getIndex("+");
            operator = subString(x);
            answer = result + operator;
            break;
        case '-':
            x = getIndex("-");
            operator = subString(x);
            answer = result - operator;
            break;
        case '*':
            x = getIndex("*");
            operator = subString(x);
            answer = result * operator;
            break;
            x = getIndex("/");
            operator = subString(x);
            answer = result / operator;
            break;
    }
    resultDisplay.innerHTML = answer.toString(2);
}

