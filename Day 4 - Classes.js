//DAY 4: Classes

//Create a Polygon class that has the following properties:

//A constructor that takes an array of integer values describing the lengths of the polygon's sides.
//A perimeter() method that returns the polygon's perimeter.


class Polygon {
	constructor(arr) {
		this.sides = arr;
	}
	
	perimeter() {
		var perimeter = 0;
        this.sides.forEach(function(side) {
            perimeter += side;
        });
        return perimeter
	}
}