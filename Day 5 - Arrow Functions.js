//DAY 5: Arrow Functions
//
//Given array, if number is even multiply by 2, if odd multiply by 3. Then return new array.

function modifyArray(nums) {
    var newNums = [];
    
    nums.forEach(function(num) {
        if (num % 2 === 0) {
            newNums.push(num * 2);
        } else {
            newNums.push(num * 3);
        }
    })
    return newNums;
}

//WITH MAP

function modifyArray(nums) {
    var newNums = nums.map(function(num) {
		    if (num % 2 === 0) {
            return num * 2;
        } else {
            return num * 3;
        }
			
		});

    return newNums;
}