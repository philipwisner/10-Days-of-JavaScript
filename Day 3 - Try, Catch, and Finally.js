//DAY 3: Try, Catch, and Finally

//Try to reverse string s using the split, reverse, and join methods.
//If an exception is thrown, catch it and print the contents of the exception's message on a new line.
//Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    if (typeof s === 'string') {
        let reverse = s.split('').reverse().join('');
        console.log(reverse);
    } else {
        console.log('s.split is not a function')
        console.log(s);
    }
}