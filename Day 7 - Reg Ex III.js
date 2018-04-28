//DAY 7: Reg Ex III

//Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
     var re = /\d+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

/* This is a simple RegEx. All you need to do is fitler out for everything that is a number. 

var re = //;
So you start the RegEx.

var re = /\d/;
Then you ad the digit regex that matches any number from 0-1, which is what we are looking for

var re = /\d+/;
Then you add the + quantifier which matches one or more digit, because we need to match more than one number

var re =/\d+/g;
Then you end with g to signify that the search is global

*/
