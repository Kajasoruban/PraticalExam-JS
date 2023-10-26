//q1

const emp = {};

//q2

const person = {

    name:"kajan",
    age:21,
    introduceYou: function() {

        return 'Hello,my name is '+ this.name;
    }

};

console.log(person.introduceYou());

//q3

var student = {stname:'kajan'};

function greetStudent() {
    return 'Hello '+student.stname+' Welcome to the Coding School'

}

console.log(greetStudent());

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
console.log(studentCourse);

//q9 check if it's exist
console.log(student.address);


//q10 obj to json

var book = {

    title:"untitled",
    author:"kajan",
    year:2023
};

var examp = JSON.stringify(book);
console.log(examp);

//q11 array in objects

var students = {

    name:"kajan",
    age:21,
    gpa:0


};