// try basic javascript

//we can use var to declare both local and global variable var hoisted variable but not value
// int let we can only initial local variable and it will not be hoisted and you cannot declare 2 time for a same variable
// const you can cannot change this variable

// you can numeric or string literally for the name of a property ( property in an object)
// you can nest an object inside another

const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

//the == compare variable after interpret (or cpnvert if needed)
//the === compare variable without conversion

a = 10;
b = "10";

console.log(a == b) // true
console.log(a === b) // false