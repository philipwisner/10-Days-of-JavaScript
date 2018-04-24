//DAY 2: Conditional Switch

//Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

function getLetter(s) {
    let letter;
    switch(s[0]) {
			case 'a':
			case 'e': 
			case 'i':
			case 'o':
			case 'u':
				letter = 'A'
				break;
			case 'b': 
			case 'c': 
			case 'd': 
			case 'f': 
			case 'g':
				letter = 'B'
				break;
			case 'h': 
			case 'j': 
			case 'k': 
			case 'l':
			case 'm':
				letter = 'C'
				break;
			case 'n':
			case 'p':
			case 'q': 
			case 'r':
			case 's': 
			case 't': 
			case 'v': 
			case 'w': 
			case 'x':
			case 'y': 
			case 'z':
				letter = 'D'
				break;
		}
    
    return letter;
}