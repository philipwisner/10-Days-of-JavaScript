//DAY 7: Reg Ex I

//Write Reg Ex to say if string starts and ends with same vowel

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = /\b([aeiou])[a-z]+\1\b/i;
    
    /*
     * Do not remove the return statement
     */
    return re;
}