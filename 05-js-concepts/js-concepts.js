// Assignment
//
// Create a function that everytime you invoke it, it will print out the message "Congrats you earn the chance!", however it can only print out the message with the first 5 excutions. all the rest invoke will print out the message "Sorry you missed the chance"
// function printMsg

// let counter = 1;
// function printMasg() {
//     if (counter <= 5) {
//         console.log("Congrats you earn the chance!");
//         counter += 1;
//     }
//     else {
//         console.log("Sorry you missed the chance");
//     }

// }

// printMasg();
// printMasg();
// printMasg();
// printMasg();
// printMasg();
// printMasg();

// // Filter an Array with a user input of minimum length


// arr1 = ["123123", "123", "451511", "422"];
// const minimumLength = 5;

// function cb(minimumLength) {
//     return function(element) {
//         return element.length >= minimumLength;
//     };
// }

// console.log(arr1.filter(cb(5)));

// var a = 5;
// function foo() {
//   console.log(a); //5
//   if (true) {
//     a = 3;
//   }
//   console.log(a); //3
// }
// foo();

// var a = 3;
// function foo() {
//   console.log(a); //undefined
//   if (true) {
//     var a = 5;
//   }
//   console.log(a); //5
// }
// foo();

// console.log(adsfaldkjf);

// foo();
// function foo() {
//   console.log(a);
//   var a = 5;
// }

// myFunction(); // Error: foo is not defined.
// namedFunction(); // Error: foo is not defined.
// var myFunction = function namedFunction() {
//   console.log("Hello");
// };

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// //   let p = Person("Ana", 18);
// //   console.log(p); //undefined

// let p = new Person("Ana", 18);
// p.walk = function () {
//   console.log(this.name + " is walking."); // What is 'this' here? It is about who calls the function.
// };
// console.log(p);
// p.walk();

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     walk() {
//       console.log("Class method called: ", this.name + " is walking.");
//     }
//   }
//   let p = new Person("Dio", 200);
//   let obj = { name: "Jojo" };
//   obj.walk = p.walk;
//   obj.walk(); // Class method called:
//   p.walk = function () {
//     console.log("Instance method called: ", this.name + " is walking.");
//   };
//   p.walk();
//   let p2 = new Person("Ana", 18);
//   p2.walk(); //Class method called

// class Person {
//     constructor(name, age) {
//       this._name = name; //_is used to identify that this is a private variable that should have restricted access. JavaScript does not have any private variable feature.
//       this._age = age;
//       this.salary = 20;
//     }
//     get name() {
//       console.log("Get Name");
//       return this._name;
//     }
//     set name(newName) {
//       console.log("Set Name"); // ????How can this line of code be called
//       this._name = newName;
//     }
//     getSalary() {
//       return this.salary;
//     }
//   }
//   class Employee extends Person {
//     constructor(name, age, company) {
//       super(name, age);
//       this.company = company;
//     }
//     getSalary(baseSalary) {
//         return this.salary + baseSalary;
//     }
//   }
//   let e = new Employee("Ana", 18, "Antra");
//   console.log(e.getSalary()); // getSalary(baseSalary)() is called here, and the parameter is ignored because of function overwriting.


// const arr = [1, 2, 3];
// console.log(arr);

// console.log(arr.map((item) => {
//     return (item *= 2);
// }))

Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i]);
    }
}

const arr = [1, 2, 3];
arr.myForEach((item) => {
    return item += 2;
})

console.log(arr);

// Array.prototype.myMap = function (cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       newArr.push(cb(this[i], i, this)); // or we can write newArr[i] = cb(this[i], i, this);
//     }
//     return newArr;
//   };
//   let test = [1, 2, 3];
//   console.log(
//     test.myMap((item) => {
//       return (item += 2);
//     })
//   );