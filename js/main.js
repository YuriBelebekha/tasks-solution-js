function template() {
// CODEWARS TASK - JS -
// 


// START OF SOLUTION

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////
}




// CODEWARS TASK - JS - Regex validate PIN code
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
// contain anythingbut exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// START OF SOLUTION
function validatePIN(pin) {
  const re = /^(\d{4}|\d{6})$/;
  const result = re.test(pin);
  console.log('pin: ', pin, result);  
}

validatePIN("1234");
validatePIN("12345");
validatePIN("123456");
validatePIN("a234");
// END OF SOLUTION




// CODEWARS TASK - JS - Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// START OF SOLUTION
// function getSum(a, b) {  
//   let total = 0;

//   if (a === b) {
//     console.log(a);
//   };

//   if (a < b) {
//     for (let i = a; i <= b; i += 1) {      
//       total += i;
//     }    
//     console.log(total);
//   };

//   if (a > b) {
//     for (let i = b; i <= a; i += 1) {      
//       total += i;
//     }    
//     console.log(total);
//   };  
// }

// OR BEST & CLEVER SOLUTION

// const getSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   const result = (max - min + 1) * (min + max) / 2;
//   console.log(result);
// }

// getSum(0, -1); // -1
// getSum(0, 1); //  1
// getSum(2, 2); //  2
// getSum(5, -1); //  14
// getSum(357, -358); //  -358

// END OF SOLUTION




// CODEWARS TASK - JS - Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0](array with a zero).

// START OF SOLUTION
// function oddOrEven(array) {
//   let total = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }

//   if (total % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }  

//   // OR

//   // return arr.reduce((a,b) => a+b, 0) % 2 ? 'odd' : 'even';
// }

// oddOrEven([0]);
// oddOrEven([0, 1, 4]);
// oddOrEven([0, -1, -5]);
// oddOrEven([]);
// END OF SOLUTION




// CODEWARS TASK - JS - Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// START OF SOLUTION
// function getCount(str) { 
//   const result = str.match(/[a,e,i,o,u]/gi) !== null
//     ? str.match(/[a,e,i,o,u]/gi).length
//     : 0;
  
//   console.log(result);  
// }

// getCount('abracadabra');
// getCount('bubasmith');
// getCount('caravan');
// getCount('bangladesh');
// getCount('Complete the solution so that it returns true');
// getCount('my pyx');
// END OF SOLUTION





// CODEWARS TASK - JS - String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument(also a string).

// START OF SOLUTION
// function solution(str, ending) {

//   // const result = ending.length > 0
//   //   ? str.slice(ending.length * -1) === ending
//   //   : true
//   // console.log(result);

//   // OR

//   console.log(str.endsWith(ending)); // best solution
// }

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abc', '') // returns true
// END OF SOLUTION




// CODEWARS TASK - JS - Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// Given an array of integers your solution should find the smallest integer.

// START OF SOLUTION

// function findSmallestInt(args) {  
//   return console.log(Math.min(...args));
// }

// findSmallestInt([34, 15, 88, 2]);

// END OF SOLUTION




// CODEWARS TASK - JS - Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Given an array of integers.
// Return an array, where the first element is the count of
// positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
// you should return [10, -65].

// START OF SOLUTION
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
// countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
// countPositivesSumNegatives([+0, +0]);
// countPositivesSumNegatives([]);
// countPositivesSumNegatives();

// function countPositivesSumNegatives(input) {  
//   let positiveNumbersArray = []
//   let emptyArray = [];
//   let negativesSum = 0;
//   let result = [];
  
//   if (input === undefined || input === null) {
//     return console.log(emptyArray);
//   }
  
//   input.forEach(number => {
//     if (number > 0) {
//       positiveNumbersArray.push(number);
//     }

//     if (number === 0) {
//       positiveNumbersArray.push();
//     }

//     if (number < 0) {
//       negativesSum += number;
//     }    
//   })

//   if (positiveNumbersArray.length > 0 && negativesSum < 0) {
//     result.push(positiveNumbersArray.length, negativesSum);
    
//   }
//   console.log('result', result);
// }
// END OF SOLUTION




// CODEWARS TASK - JS - Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// START OF SOLUTION
// function XO(str) {
//   const strLowerCase = str.toLowerCase();
//   let arrayX = [];
//   let arrayY = [];

//   for (let i = 0; i < str.length; i += 1) {
//     if (strLowerCase[i] === 'x') {
//       arrayX.push(str[i]);
//     };

//     if (strLowerCase[i] ==='o') {
//       arrayY.push(str[i]);
//     };
//   }

//   console.log(arrayX.length === arrayY.length);    
// }

// XO("ooxx") // true
// XO("xooxx") // false
// XO("ooxXm") // true
// XO("zpzpzpp") // true // when no 'x' and 'o' is present should return true
// XO("zzoo") // false
// END OF SOLUTION




  // CODEWARS TASK - JS - Reversed Strings
  // https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

  // Complete the solution so that it reverses the string passed into it.
  // 'world'  =>  'dlrow'
  // 'word'   =>  'drow'

  // START OF SOLUTION
  // function solution(str){
  //   console.log(str.split("").reverse().join(''));
  // }

  // solution('world');
  // solution('word');
  // solution('Glory to Ukraine');

  // END OF SOLUTION
  



// CODEWARS TASK - JS - Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle,
// return its perimeter.

// START OF SOLUTION
// const areaOrPerimeter = function(l , w) {
//   let result = 0;

//   if (l === w) {
//     result = l * w;
//   } else {
//     result = l * 2 + w * 2;
//   }  
  
//   console.log(result);
// };

// areaOrPerimeter(3, 3);  // 9
// areaOrPerimeter(6, 10); // 32
// END OF SOLUTION




// CODEWARS TASK - JS - Double Char
//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

// Given a string, you have to return a string in which each character
// (case -sensitive) is repeated once.

// START OF SOLUTION
// function doubleChar(str) {  
//   let doubleCharactersString = [];
  
//   str.split('').map(character => doubleCharactersString.push(character + character));
//   console.log(doubleCharactersString.join(''));
// }

// doubleChar("abcd");       // "aabbccdd"
// doubleChar("Adidas");     // "AAddiiddaass"
// doubleChar("1337");       // "11333377");
// doubleChar("illuminati"); // "iilllluummiinnaattii"
// doubleChar("123456");     // "112233445566"
// doubleChar("%^&*(");      // "%%^^&&**(("
// END OF SOLUTION




// CODEWARS TASK - JS - Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/javascript

// Write a function that takes an array of numbers and returns the sum of
// the numbers.The numbers can be negative or non - integer.If the array
// does not contain any numbers then you should return 0.

// START OF SOLUTION
// function sum(numbers) {
//   "use strict";
//   let sum = 0;
//   sum = numbers.length > 0 ? numbers.reduce(function (acc, number) { return acc + number; }) : 0;  
//   console.log(sum);

//   // OR BEST PRACTICES
//   // sum = numbers.reduce((acc, number) => acc + number, 0);
//   // console.log(sum); 
// };

// sum([]); // 0
// sum([1, 5.2, 4, 0, -1]); // 9.2
// END OF SOLUTION




// CODEWARS TASK - JS - Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

// START OF SOLUTION
// function sumMix(x){
//   let sum = 0;
//   x.forEach(element => {  
//     if (element === undefined) {
//       element = 1;
//     }

//     sum += Number(element);
//   });  
//   console.log(sum);  
// }

// sumMix([9, 3, undefined, '3'])                // 16
// sumMix([9, 3, '7', '3'])                      // 22
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])     // 42
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 41
// END OF SOLUTION




// CODEWARS TASK - JS - Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// Write a function to convert a name into initials. This kata strictly takes
// two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// START OF SOLUTION

// function abbrevName(name){
//   let abbreviationArray = [];
  
//   name.split(' ').forEach(element => abbreviationArray.push(element.toUpperCase().slice(0, 1)));
//   console.log(abbreviationArray.join('.'));
// }

// abbrevName("Sam Harris")      //"S.H"
// abbrevName("Patrick Feenan")  //"P.F"
// abbrevName("Evan Cole")       //"E.C"
// abbrevName("P Favuzzi")       //"P.F"
// abbrevName("David Mendieta")  //"D.M"

// END OF SOLUTION




// CODEWARS TASK - JS - Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and 
// the lowest element(by value, not by index!).
// The highest or lowest element respectively is a single element at each edge,
// even if there are more than one with the same value.
// Mind the input validation.

// START OF SOLUTION

// function sumArray(array) {
//   let sum = 0;
  
//   if (array === null || array === undefined) {
//     return console.log(sum);
//   }

//   const minNumberIndex = array.indexOf(Math.min(...array));
//   array.splice(minNumberIndex, 1);

//   const maxNumberIndex = array.indexOf(Math.max(...array));
//   array.splice(maxNumberIndex, 1);
  
//   array.forEach(elem => {
//     sum += elem;
//   })

//   return console.log(sum);
// };

// sumArray(undefined)
// sumArray(null);                         // 0
// sumArray([ ]);                          // 0
// sumArray([ 3 ]);                        // 0
// sumArray([ 3, 5 ]);                     // 0
// sumArray([ 6, 2, 1, 8, 10 ]);           // 16
// sumArray([ 0, 1, 6, 10, 10 ]);          // 17
// sumArray([ -6, -20, -1, -10, -12 ]);    // -28
// sumArray([ -6, 20, -1, 10, -12 ]);      // 3

// END OF SOLUTION