//DAY 3: Throw

//Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
//If a is 0, throw an Error with meassage = Zero Error.
//If a is negative, throw an Error with message = Negative Error.

function reverseString(s) {
    if (typeof s === 'string') {
        let reverse = s.split('').reverse().join('');
        console.log(reverse);
    } else {
        console.log('s.split is not a function')
        console.log(s);
    }
}