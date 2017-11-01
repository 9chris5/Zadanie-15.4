"use strict";

var hello = "Hello",
    world = "World";
console.log(hello + " " + world);
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var table = [1, 4, 'Iwona', false, 'Nowak'];

var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var value = args.reduce(function (total, argument) {
        return total + argument;
    });
    return value / args.length;
};
var firstName = table[2],
    lastName = table[4];


console.log("Mutltiply(5, 6) = " + multiply(5, 6));
console.log("Mutltiply(9) = " + multiply(9));
console.log("Average(1, 2, 3) = " + average(1, 2, 3));
console.log("Average(...grades) = " + average.apply(undefined, grades));
console.log("Name: " + firstName + " " + lastName);
