'use strict'
// Object-oriented programming 
// class: template 
// object: instance of a class
// JavaScript classes 
// - introdeced in ES6
// - syntactical sugar over prototype-based inheritancce

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods 
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            throw Error('age can not be nagative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Job', 30);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. Static properties and methods 
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined 
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another classa.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} 
class Triangle extends Shape {
    draw() {
        super.draw(); //부모 메소드 호출
        console.log('Triangle!');
    }
    getArea() {  //overriding
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle color: ${this.color}`; 
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true

