const hello = "Hello",
      world = "World";
console.log(hello + " " + world);
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const table = [1, 4, 'Iwona', false, 'Nowak'];

const multiply = (a = 1, b = 1) => console.log(`Multiply: ` + a * b);
const average = (...args) => {
    let value = 0;
    let amount = 0;
    args.forEach(arg => {
        value += arg;
        amount += 1;
    });
    console.log(`Average: ` + value/amount);
};
const [ , , firstName, , lastName] = table;

multiply(5, 6);
multiply(9);
average(1, 2, 3);
average(...grades);
console.log(`Name: ` + firstName + ` ` + lastName);