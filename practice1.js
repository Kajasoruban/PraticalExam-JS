//q1

const emp = {};

//q2

const person = {

    name:"kajan",
    age:21,
    introduceYou: function() {
        console.log('Hello,my name is '+ this.name);

        // return 'Hello,my name is '+ this.name;
    }

};

person.introduceYou();

//q3

var student = {
    
    greetStudent:function greetStudent(student) {
        console.log(`Hello ${student.stname} Welcome to the Coding School`);
    
        // return 'Hello '+this.stname+' Welcome to the Coding School'
    
    }


};

student.greetStudent({stname:'kajan'});

// student.stname='kajan';

// console.log(student)

//q4 

console.log(person.age);
console.log(person["age"]);

//q5 add new property to obj

person.email='john@gamil.com';
console.log(person);

//q6 to remove
delete person.email;
console.log(person);


//q7  check if it's exist

console.log(person.hasOwnProperty('age'));

//q8 merge obj
var student = {stname:'kajan'};
var course = {coname:'fullstack'};

var studentCourse = {...student,...course} ;
// var studentCourse = Object.assign(student,course);

console.log(studentCourse);

//q9 check if it's exist

student.hasOwnProperty('address') ? console.log('Address is there'):
console.log('Address not found');

//q10 obj to json

var book = {

    title:"untitled",
    author:"kajan",
    year:2023
};

var examp = JSON.stringify(book);
console.log(examp);

//q11 array in objects

var students = [
   {
    name:"one",
    age:1,
    gpa:0
   },
   {
    name:"two",
    age:2,
    gpa:0
   },
   {
    name:"three",
    age:3,
    gpa:0
   }

];
console.log(students);