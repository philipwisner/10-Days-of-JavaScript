//DAY 3: Arrays

//Complete the getSecondLargest function in the editor below. It has one parameter: nums an array, n, of  numbers. The function must find and return the second largest number in nums.

function getSecondLargest(nums) {
    let sortedArray = nums.sort((a, b) => b - a);
    var uniqueArraySorted = sortedArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    return uniqueArraySorted[1];
}