var message = "Hello World";
var isDone = false;
var age = 25;
var userName = "Alice";
var list = ['test'];
var tuple = [['test'], [2]];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
function add(x, y) {
    return x + y;
}
var result = add(5, 10);
