//DAY 6: Bitwise Problem

//Return the maximum possible value of a & b for any a < b in sequence S.


/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    let max = 0;
    let current = -1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n ; j++) {
            current = i & j;
            if (current < k && current > max) {
                max = current;
            }
        }
    }
    return max;
}