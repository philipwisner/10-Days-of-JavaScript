DAY 5: Template Literals

function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];
    
    var s1 = (perimeter + Math.sqrt(perimeter * perimeter - (16 * area)))/4;
    var s2 = (perimeter - Math.sqrt(perimeter * perimeter - (16 * area)))/4;;
    var array = [s2, s1];
    return array;
}