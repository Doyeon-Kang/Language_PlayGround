//Object.js

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties 
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object contructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 20};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob); // undefined 

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); //실시간으로 원하는 값을 받아올 때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj.key); // undefined
    console.log(obj[key]); // ellie
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = new Person('ellie', 30);
console.log(person3);


// 4. Constuctor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);


// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

console.clear();
const user4 = {};
Object.assign(user4, user);
user4.name = 'coding'
console.log(user4);
console.log(user3);

// another example 
const fruit1 = {color: 'red', size: 'big'};
const fruit2 = {color: 'blue'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
