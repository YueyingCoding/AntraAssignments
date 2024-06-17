// // 1. implement my own prototype filter method

// Array.prototype.myFilter = function(callback) {
//     const newArray = [];
//     for (const element of this) {
//         if (callback(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'testing'];

// const result1 = words.filter((word) => word.length > 6);
// const result2 = words.myFilter((word) => word.length > 6);
// console.log(result1, result2);


// // 2. implement my own prototype reduce method

// Array.prototype.myReduce = function(callback, initialValue) {
//     let result = initialValue ? initialValue : 0;
//     for (const element of this) {
//         result = callback(element, result);
//     }
//     return result;
// }

// const array1 = [5, 1, 2, 3, 4, 10];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 100;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// const sumWithInitial2 = array1.myReduce((accumulator, currentValue) => accumulator + currentValue,
// initialValue,);

// console.log(sumWithInitial, sumWithInitial2);


// function foo() {
//     for (let i = 0; i < arguments.length; i++) {
//       console.log(arguments[i]);
//     }
//   }
//   foo(1, 2, 3, 4, 5);

// const d = { name: { value: "Hello" } };
// const e = { ...d };
// e.name.value = "Hi";
// console.log(d === e);
// console.log(d, e);  // { name: { value: 'Hi' } } { name: { value: 'Hi' } }

// const foo = function () {
//     console.log("Normal fn");
//     console.log(this);
//   };

//   const foo2 = () => {
//     console.log("Arrow fn");
//     console.log(this);
//   };

//   foo(); //Print global object
//   foo2(); //Print an empty object

// function foo() {
//     console.log("Hello");
//     var a = 5;
//     return function () {
//       console.log(a);
//     };
//   }
//   let a = foo();
//   console.log(a); //'Hello', [Function]

// function foo() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//   }
//   foo(); //5, 5, 5, 5, 5

// function foo() {
//     let i = 0;
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//     i = 5;
//   }
//   foo(); // 5

// function foo() {
//     var i = 0;
//     let a = i * 1000;
//     function foo() {
//       console.log("outer:", i);
//       return function () {
//         console.log("inner:", i);
//       };
//     }
//     setTimeout(foo, a);
//     i = 5;
//   }
//   foo(); //0, 5


function foo() {
    console.log("foo");
  }
  function randomTimer() {
    return Math.random() * 10000; //Math.random() method will return a random number between 0-1
  }
  function callFooWithTimer() {
    setTimeout(foo, randomTimer());
  }