//DAY 3: Throw

//Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
//If a is 0, throw an Error with meassage = Zero Error.
//If a is negative, throw an Error with message = Negative Error.

function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else if (a === 0) {
        return 'Zero Error';
    } else {
        return 'Negative Error';
    }   
}