// Q1. make a string out of an array / join()
{
    const fruits = ['apple', 'banana', 'orange'];
    let str = '';
    for(value of fruits) {
        str += value;
    }
    console.log(str);

    const str2 = fruits.join('|'); //seperator
    console.log(str2);
}

// Q2. make an array out of a string / split()
{
    const fruits = 'apple, banana, orange'
    const arr = fruits.split(',');
    console.log(arr);
}

// Q3. make this array look ilke this: [5, 4, 3, 2, 1] // reverse()
{
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [];
    const length = arr.length;
    for (let i=0; i<length; i++) {
        arr2[i] = arr.pop();
    }
    console.log(`arr2: ${arr2}`);

    const arr3 = [1, 2, 3, 4, 5];
    const arr4 = arr3.reverse();
    console.log(`arr4: ${arr4}`);
}

// Q4. make new array without the first two elements / slice()
{
    console.clear();
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this. enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90 / find()
{
    const f = function(key) {
        for(value of students) {
            if(value[key] === 90) {
                return value;
            }
        }
    }
    const result = f('score');
    console.log(result);

    const result2 = students.find((student, index)  => student.score === 90
    )
    console.log(result2);
}

// Q6. make an array of enrolled students / filter()
{
    array = [];
    const f = function() {
        for(value of students) {
            if(value['enrolled'] === true) {
                array.push(value);
            }
        }
    }
    f();
    console.log(array);

    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students` scores / map()
// result should be [45, 80, 90, 66, 88] 
{
    const result = [];
    for(value of students) {
        result.push(value['score']);
    }
    console.log(result);

    const result2 = students.map((student) => student.score);
    console.log(result2);
}

// Q8. check if there is a student with the score lower than 50 / some(), every()
{
    const f = () => {
        for (value of students) {
            if(value['score'] < 50) {
                return true;
            } 
        }
    }
    if(f() === true) {
        console.log('미달자가 있습니다.');
    }

    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);
    
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students` average score / reduce()
{
    let sum = 0, avg;
    for(value of students) {
        sum += value['score'];
    }
    avg = sum / students.length;
    console.log(`avg: ${avg}`);

    console.clear();

    const result = 
}

// Q10. make a string containing all the scores 
// result should be: '45, 80, 90, 66, 88' 
{

}
    