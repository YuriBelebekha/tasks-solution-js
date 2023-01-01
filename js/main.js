function template() {
// CODEWARS TASK - JS -
// 


// START OF SOLUTION

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////
}



// CODEWARS TASK - JS - Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle,
// return its perimeter.

// START OF SOLUTION
const areaOrPerimeter = function(l , w) {
  let result = 0;

  if (l === w) {
    result = l * w;
  } else {
    result = l * 2 + w * 2;
  }  
  
  console.log(result);
};

areaOrPerimeter(3, 3);  // 9
areaOrPerimeter(6, 10); // 32
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