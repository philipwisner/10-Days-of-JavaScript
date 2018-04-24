//DAY 1: Let and Const

//1. Declare a const PI and assign it the value of Math.PI
//2. Read a number r, denoting the radius of circle
//3. Use PI and r to calculate the area and perimeter of a circle having radius r.
//4. Print areaas the first line of output and print perimeter as the second line of output.


function main() {
    const PI = Math.PI;
    var r = readLine(); 
    var area = PI * Math.pow(r, 2);
    console.log(area);    
    var perimeter = 2 * PI * r;
    console.log(perimeter);