// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators 
console.log(1 + 1); // add
console.log(1 - 1); // substact
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log( `preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log( `postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators 
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators 
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greather than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i=0; i<10; i++) {
        //wasting time
        console.log('ㅠㅜ');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ? 
// condition ? value1 : value2

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

// 11. Loops
// while loop, while the condition is truthy,
// body code is excuted.

// do while loop, body code is excuted first,
// then check the condition.

// for loop, for(begin; condition; step)

// break, continue 
for(let i=0; i<=10; i++) {
    if(i% 2!== 0) {
        continue;
    }
    console.log(i);
}

for(let i=0; i<=10; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}