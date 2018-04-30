/* When the button5 is clicked, the 
text of the buttons need rotate clockwise around the outside of the 5, everytime the button is clicked.
*/

var buttonNumbers = [1, 2, 3, 6, 9, 8, 7, 4];
//This array represents the button texts written in clockwise order around the 5 button

function rotateClockwise() {    
  buttonNumbers.unshift(buttonNumbers.pop());
  document.getElementById('btn1').innerHTML = buttonNumbers[0];
  document.getElementById('btn2').innerHTML = buttonNumbers[1];
  document.getElementById('btn3').innerHTML = buttonNumbers[2];
  document.getElementById('btn6').innerHTML = buttonNumbers[3];
  document.getElementById('btn9').innerHTML = buttonNumbers[4];
  document.getElementById('btn8').innerHTML = buttonNumbers[5];
  document.getElementById('btn7').innerHTML = buttonNumbers[6];
  document.getElementById('btn4').innerHTML = buttonNumbers[7];
}


