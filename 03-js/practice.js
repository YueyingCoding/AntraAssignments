// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

const { log } = require('console');

function reverseNumber(number) {
    const numberStr = String(number);
    return numberStr.split("").reverse().join("");
}
// console.log(reverseNumber(12345));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run

function isPalindrome(input) {
    if (input === input.split("").reverse().join("")) {
        return true;
    }
    return false;
}
// console.log(isPalindrome(12345));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function getCombinations(input) {
    const output = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            output.push(input.slice(i, j + 1));
        }
    }
    return output;
}

// console.log(getCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortString(input) {
    return input.split("").sort().join("");
}

// console.log(sortString("webmaster"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox

function convertFirstLetter(input) {
    const inputList = input.split(" ");
    const output = []
    for (let word of inputList) {
        const update = word.charAt(0).toUpperCase() + word.slice(1);
        output.push(update);
    }
    return output.join(" ");
}
// console.log(convertFirstLetter("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let maxLength = 0;
    let longestWord = "";
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}

// console.log(findLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function countVowels(input) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    for (const letter of input) {
        if (vowels.has(letter)) {
            count += 1;
        }
    }
    return count;
}

// console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(14));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined

function checkType(input) {
    return typeof(input);
}

// console.log(checkType());

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function generateIdentity(n) {
    const matrix = Array(n).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1;
    }
    return matrix;
}

// console.log(generateIdentity(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function findSecond(input) {
    input.sort();
    return [input[1], input[input.length - 2]];
}

// console.log(findSecond([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function isPerfect(n) {
    let total = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            total += i;
        }
    }
    if (total == n) {
        return true;
    }
    return false;
}

// console.log(isPerfect(496));

// 13. Write a JavaScript function to compute the factors of a positive integer.

function findFactors(n) {
    const factors = [];
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            factors.push(i);
            factors.push(n / i);
        }
    }
    return factors;
}

// console.log(findFactors(12));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function useCoins(amount, coins) {
    const dp = [];
    dp.push(0);
    for (let i = 1; i <= amount; i++) {
        if (coins.includes(i)) {
            dp.push([i]);
        }
        else {
            dp[i] = Array.from(Array(i).fill(0));
            for (j = 0; j < i; j++) {
                if (dp[j].length + dp[i - j].length < dp[i].length){
                    dp[i] = dp[j].concat(dp[i - j]);
                }
            }
        }

    }
    if (dp.at(-1)[0] != 0){
        return dp.at(-1);
    }
    else {
        return "impossible to use coins"
    }

}

// console.log(useCoins(3, [2]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

function calculateExp(callback) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the base and exponent (separated by space): ", function(input) {
        const [base, exponent] = input.split(" ").map(Number);
        const result = Math.pow(base, exponent);
        callback(result);
        rl.close();
    });
}

// calculateExp((result) => {
//     console.log(result);
// })

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function findUniqueChars(input) {
    const charSet = new Set();
    const output = [];
    for (const char of input) {
        if (!charSet.has(char)) {
            charSet.add(char);
            output.push(char);
        }
    }
    return output.join("");
}

// console.log(findUniqueChars("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function calcOccurance(input) {
    const freq = {};
    for (const char of input) {
        if (!freq[char]) {
            freq[char] = 0;
        }
        freq[char] += 1;
    }
    return freq;
}

// console.log(calcOccurance("test"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function findTarget(target, numArray) {
    let l = 0, r = numArray.length;
    let m;
    while (l < r) {
        m = l + (r - l) / 2;
        if (numArray[m] == target) {
            return m;
        }
        if (numArray[m] < target) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    if (numArray[l] == target) {
        return l;
    }
    return -1;
}

// console.log(findTarget(3, [1, 1, 2, 3]));

// 19. Write a JavaScript function that returns array elements larger than a number.

function findElements(pivot, numArray) {
    const output = [];
    for (const num of numArray) {
        if (num > pivot) {
            output.push(num);
        }
    }
    return output;
}

// console.log(findElements(3, [2, 5, 20, 100, 6, 1]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateID(length) {
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const id = [];
    while (id.length < length) {
        id.push(charList.charAt(Math.random() * charList.length));
    }
    return id.join("");
}

// console.log(generateID(8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

function getCombinations(length, numArray) {
    const output = [];
    const resultSet = new Set();
    function backtrack(i, subset) {
        if (subset.length == length) {
            const sortedSubset = subset.sort((a, b) => {a - b});
            if (!resultSet.has(sortedSubset.join(''))) {
                resultSet.add(sortedSubset.join(''));
                output.push(JSON.parse(JSON.stringify(sortedSubset)));
            }
        }
        if (i == numArray.length) {
            return;
        }
        subset.push(numArray[i]);
        backtrack(i + 1, subset);
        subset.pop();
        backtrack(i + 1, subset);
        return;
    }
    backtrack(0, [])
    return output;
}

// console.log(getCombinations(3, [1, 2, 3, 4, 5]));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

function countOccur(inputString, letter) {
    let freq = 0;
    for (const char of inputString) {
        if (char === letter) {
            freq += 1;
        }
    }
    return freq;
}

// console.log(countOccur('microsoft.com', 'm'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

function findFirstNonRepeat(inputString) {
    const seen = new Set();
    let letter;
    for (const char of inputString) {
        if (!seen.has(char)) {
            seen.add(char);
            letter = char;
        }
    }
    return letter;
}

// console.log(findFirstNonRepeat('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(numArray) {
    let tmp;
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[i] < numArray[j]) {
                tmp = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = tmp;
            }
        }
    }
    return numArray;
}

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function findLongestCountry(countryList) {
    let country;
    let maxLength = 0;
    for (const c of countryList) {
        if (c.length > maxLength) {
            maxLength = c.length;
            country = c;
        }
    }
    return country;
}

// console.log(findLongestCountry(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

function longestSubString(inputString) {
    const seen = {};
    let maxLength = 0;
    let subString = "";
    let l = 0, r = 0;
    while (r < inputString.length) {
        if (!seen[inputString[r]]) {
            seen[inputString[r]] = 1;
        }
        else {
            seen[inputString[r]] += 1;
            if (r - l > maxLength) {
                maxLength = r - l;
                subString = inputString.slice(l, r);
            }
            while (inputString[l] !== inputString[r]) {
                seen[inputString[l]] -= 1;
                if (seen[inputString[l]] == 0) {
                    delete seen[inputString[l]];
                }
                l += 1;
            }
            l += 1;
        }
        r += 1;
    }
    return subString;
}

// console.log(longestSubString("abcdacdwkfd"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(inputString) {
    if (!inputString) {
        return "";
    }
    let palindrome = inputString[0];
    let maxLength = 1;
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j < inputString.length; j++) {
            if (isPalindrome(inputString.slice(i, j)) && (j - i) > maxLength) {
                maxLength = j - i;
                palindrome = inputString.slice(i, j);
            }
        }
    }
    function isPalindrome(input) {
        if (input === input.split('').reverse().join('')) {
            return true;
        }
        return false;
    }

    return palindrome;
}

// console.log(longestPalindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function executeFunction(callback) {
    console.log("This is the outer function");
    callback();
}

function sampleFunction() {
    console.log("This is the inner function");
}

// executeFunction(sampleFunction);


// 29. Write a JavaScript function to get the function name.

function funcName(callback) {
    callback();
    return callback.name;
}

function myFunction() {
    console.log("the name of this function is: ");
}

// console.log(funcName(myFunction));