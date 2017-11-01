const hello = "Hello",
      world = "World";
console.log(hello + " " + world);
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const table = [1, 4, 'Iwona', false, 'Nowak'];

const multiply = (a, b = 1) => a * b;
const average = (...args) => {
    const value = args.reduce((total, argument) => total + argument);
    return value / args.length;
};
const [ , , firstName, , lastName] = table;

console.log(`Mutltiply(5, 6) = ` + multiply(5, 6));
console.log(`Mutltiply(9) = ` + multiply(9));
console.log(`Average(1, 2, 3) = ` + average(1, 2, 3));
console.log(`Average(...grades) = ` + average(...grades));
console.log(`Name: ` + firstName + ` ` + lastName);