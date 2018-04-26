//DAY 5: Inheritance

//Add an area method to Rectangle's prototype.
//Create a Square class that satisfies the following:
//It is a subclass of Rectangle.
//It contains a constructor and no other methods.
//It can use the Rectangle class' area method to print the area of a Square object.


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h;
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.w = s;
        this.h = s;
    }
    
}
