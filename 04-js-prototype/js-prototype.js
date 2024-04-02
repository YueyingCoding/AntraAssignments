// 1. implement my own prototype filter method

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (const element of this) {
        if (callback(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'testing'];

const result1 = words.filter((word) => word.length > 6);
const result2 = words.myFilter((word) => word.length > 6);
console.log(result1, result2);


// 2. implement my own prototype reduce method

Array.prototype.myReduce = function(callback) {
    let result = initialValue ? initialValue : 0;
    for (const element of this) {
        result = callback(element, result);
    }
    return result;
}

const array1 = [5, 1, 2, 3, 4, 10];

// 0 + 1 + 2 + 3 + 4
const initialValue = 100;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

const sumWithInitial2 = array1.myReduce((accumulator, currentValue) => accumulator + currentValue,
initialValue,);

console.log(sumWithInitial, sumWithInitial2);