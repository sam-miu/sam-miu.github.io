// Exercise 1
String.prototype.filter = function(filteredWords) {
  let words = this.split(' ');
  for (i = 0; i < words.length; i++) {
    for  (j = 0; j < filteredWords.length; j++) { 
        if (words[i] == filteredWords[j]) {
            words.splice(i, 1)
        }
    }
  }
  return words.join(' ');
};

console.log("Banana and Strawberry are my favorite fruits".filter(['Banana', 'Strawberry']));

// Exercise 2

Array.prototype.bubbleSort = function() {
    const sortedArr = this;
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (sortedArr[i] > sortedArr[j]) {
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[j];
                sortedArr[j] = temp;
            }
        }
    }
    return sortedArr;
};

console.log([9, 3, 4, 1, 15, 2, 23, 20].bubbleSort());

// Exercise 3
//Part1
function Person1(name) {
    this.name = name;
}

function Teacher1(name) {
    Person1.call(this, name);
}

Teacher1.prototype.teach = function(subject) {
    console.log(this.name + ' is now teaching ' + subject + '.');
};

let teacher1 = new Teacher1('JacK Ma');
teacher1.teach('math')

// Exercise 3
//Part2
let randomPerson = new Person1('John Will');
function createTeacher(name) {
    let prototypePerson = Object.create(randomPerson);
    prototypePerson.name = name;
    return prototypePerson;
}

console.log(createTeacher("Daniel Louis"));

// Exercise 4

function Person(name,age) {
    this.name = name;
    this.age = age;

    this.salute = function() {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    }
}

Person.prototype.greeting = function() {
    console.log('my name is ' + this.name + ' and i am ' + this.age + 'years old');
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype.greeting = function() {
    console.log('Hey my name is ' + this.name + ' and i am studying ' + this.major);
}

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype.greeting = function() {
    console.log('Good day, my name is ' + this.name + ' and i am in the ' + this.department);
}

let prof = new Professor('Mark Jo', 39, 'Information Technology');
prof.greeting();
prof.salute();
let stu = new Student('Jean J', 21, 'Computer Science');
stu.greeting();
stu.salute();

let p = new Person('John Doe', 18);

function createProfessor(name, age, department) {
    let prof = Object.create(p);
    prof.name = name;
    prof.age = age;
    prof.department = department;
    return prof;
}

let profObject = createProfessor('Emma W', 28, 'Bio');
profObject.greeting();
profObject.salute();

function createStudent(name, age, major) {
    let stu = Object.create(p);
    stu.name = name;
    stu.age = age;
    stu.major = major;
    return stu;
}

let stuObject = createStudent('Quin Dan', 23, 'Bio Chemistry');
stuObject.greeting();
stuObject.salute();