//DAY 1: Arithmetic Operators

//Create 2 functions. One that returns the Area given length and width. Another that returns perimeter given same parameters.


function getArea(length, width) {
    let area;
    area = length * width;
    return area;
};

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}