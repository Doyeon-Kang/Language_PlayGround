'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined 
console.log(fruits[fruits.length - 1]);

console.clear();

// 3. Loopiing over an array
// print all fruits
// a. for
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let value of fruits) {
    console.log(value);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon', 'grape');
console.log(fruits);

// shift: remove an item from the beginning 
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.splice(2, 1); //splice(start: number, deleteCount?: number)
console.log(fruits);
fruits.splice(2, 0, 'water melon');
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['orange', 'pear'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('water melon')); // 2 
console.log(fruits.indexOf('green apple')); // -1

// includes
console.log(fruits.includes('grape')); // true
console.log(fruits.includes('green apple')); // false

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 1
console.log(fruits.lastIndexOf('apple')); // 4
