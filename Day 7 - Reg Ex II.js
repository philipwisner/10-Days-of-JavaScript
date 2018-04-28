//Day 7 - Regular Expressions II

//Declare a RegExp object variable named 're'. 
//It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', followed by one or more letters.
// Right after period there needs to be an uppercase letter then a lowercase letter
     
function regexVar() {

    let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+$/;
    
    
    return re;
}


/* DECONSTRUCTED

let re = //;
RegEx's are inbetween to backslashes

let re = /^/;
The carrot is to signify to match the start of a string

let re = /^(Mr)/;
Everything inside the parentheses is what the begining of the string needs to match

let re = /^(Mr\.)/;
To be able to include the period you need to use a backslash.

let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)/;
Now use the | seperator to include multiple options in the RegEx for the string to start with. Right now we are saying if the start of the string is Mr., Mrs. etc that return true. So halfway there.

let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?/;
The s character stands for whitespace, the ? makes the quantifier lazy

let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]/;
The brackets match anything inside the charcter set. This character set includes upper and lowercase.

let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+/;
The plus signs means matches one or more the of preceding range. Meaning it has one or more of the a-z/A-Z

let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+$/;
The $ mathces th eend of the string.

*/