//DAY 1: Functions

//Return a factorial of an integer given as parameter


function factorial(n) {
    for (var i = n-1; i >= 1; i--) {
     n *= i; 
    }
  return n;
}