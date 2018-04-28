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

//\b - leading word boundary (because the pattern after it matches a word character)
//([aeiou]) - Group 1 capturing a vowel from the specified range
//[a-z]+ - one or more letters (both upper- and lowercase since the /i modifier is used)
//\1 - backreference to the vowel captured with the first group
//\b - trailing word boundary