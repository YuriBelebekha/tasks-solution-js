function template() {
// CODEWARS TASK - JS -
// 


// START OF SOLUTION

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////
}


// CODEWARS TASK - JS - Sort array by string length
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
// Write a function that takes an array of strings as an argument and returns 
// a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different
// lengths, so you will not have to decide how to order multiple strings of 
// the same length.

// START OF SOLUTION
function sortByLength(array) {
  // const sortedArrayByWordLength = array.sort(function (a, b) {
  //   return a.length - b.length;
  // })
  // console.log(sortedArrayByWordLength)
  
  // OR

  return array.sort((a, b) => a.length - b.length);
};
sortByLength(["Beg", "Life", "I", "To"]); // ["I", "To", "Beg", "Life"]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// Complete the square sum function so that it squares each number passed into
// it and then sums the results together.

// START OF SOLUTION
// function squareSum(numbers) {
//   let sum = 0;
//   numbers.map(num => {sum += Math.pow(num, 2)});
//   console.log(sum);
// }

// OR BEST PRACTICES & CLEVER

// function squareSum(numbers){
//   console.log(numbers.reduce((sum,num) => sum + (num * num), 0));
// }

// squareSum([1, 2]);       // 5
// squareSum([0, 3, 4, 5]); // 50
// squareSum([]);           // 0
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// START OF SOLUTION
// function solution(string) {  
//   console.log(string.replace(/[A-Z]/g, " $&"))
// };

// solution('camelCasing');     // 'camel Casing';
// solution('camelCasingTest');  // 'camel Casing Test';
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
// Examples(input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// START OF SOLUTION
// function repeatStr(n, s) {
//   let str = '';
//   for (let i = 1; i <= n; i += 1) {
//     str += s;    
//   }
//   console.log(str)
// }

// repeatStr(3, "*");    // "***")
// repeatStr(5, "#");    // "#####"
// repeatStr(2, "ha ");  // "ha ha "

// OR BEST PRACTICES & CLEVER

// function repeatStr (n, s) {
//   console.log(s.repeat(n));
// }

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Calculate BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// START OF SOLUTION
// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   console.log(bmi)

//   if (bmi <= 18.5) {
//     console.log("Underweight");
//     return;
//   }

//   if (bmi <= 25.0) {
//     console.log("Normal");
//     return;
//   }

//   if (bmi <= 30.0) {
//     console.log("Overweight");
//     return;
//   }

//   if (bmi > 30) {
//     console.log("Obese");
//     return;
//   }
// }

// bmi(80, 1.80); // "Normal"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// START OF SOLUTION
// function sumTwoSmallestNumbers(numbers) {
//   const firstLowestNumber = numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
//   const secondLowestNumber = numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
//   console.log(Number(...firstLowestNumber) + Number(...secondLowestNumber));
// }

// OR BEST PRACTICES & CLEVER

// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   console.log(numbers[0] + numbers[1]);
// };

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);  // 13 , "Sum should be 13");
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]);  // 6 , "Sum should be 6");
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]);  // 10 , "Sum should be 10");
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24 , "Sum should be 24");
// sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16 , "Sum should be 16");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// START OF SOLUTION
// function positiveSum(arr) {
//   let arrPositiveSum = [];
//   arr.map(num => {
//     if (num > 0) {
//       arrPositiveSum.push(num);
//     };    
//   })
//   const sum = arrPositiveSum.reduce((acc, value) => acc + value, 0);
//   console.log(sum);
// }

// positiveSum([1, 2, 3, 4, 5]);       // 15
// positiveSum([1, -2, 3, 4, 5]);      // 13
// positiveSum([]);                    // 0
// positiveSum([-1, -2, -3, -4, -5]);  // 0
// positiveSum([-1, 2, 3, 4, -5]);     // 9
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// START OF SOLUTION
// function past(h, m, s){
//   console.log((((h * 60 + m) * 60) + s) * 1000);  
// }

// past(0,1,1); // 61000)
// past(1,1,1); // 3661000)
// past(0,0,0); // 0)
// past(1,0,1); // 3601000)
// past(1,0,0); // 3600000)
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////



// CODEWARS TASK - JS - Beginner Series #1 School Paperwork
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// START OF SOLUTION
// function paperwork(n, m) {
//   console.log(n < 0 || m < 0 ? 0 : n * m)
// }

// paperwork(5,5); // 25, 'Failed at paperwork(5, 5)');
// paperwork(5,-5); // 0, 'Failed at paperwork(5, -5)');
// paperwork(-5,-5); // 0, 'Failed at paperwork(-5, -5)');
// paperwork(-5,5); // 0, 'Failed at paperwork(-5, 5)');
// paperwork(5,0); // 0, 'Failed at paperwork(5, 0)');
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////



// CODEWARS TASK - JS - Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
// neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// START OF SOLUTION
//vowels: a, e, i, o, u
// function disemvowel(str) {
//   const result = `${str
//     .split('a').join('')
//     .split('e').join('')
//     .split('i').join('')
//     .split('o').join('')
//     .split('u').join('')
//     .split('A').join('')
//     .split('E').join('')
//     .split('I').join('')
//     .split('O').join('')
//     .split('U').join('')
//   }`;
//   console.log(result)
// }

// // OR BEST PRACTICES & CLEVER

// // function disemvowel(str) {
// //   console.log(str.replace(/[aeiou]/ig,''));
// // }

// disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!
// disemvowel("No offense but,\n Your writing is among the worst I've ever read"); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd
// disemvowel("What are you, a communist?"); // "Wht r y,  cmmnst?
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////



// CODEWARS TASK - JS - All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// Create a function that accepts a string and a single character, and returns
// an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// START OF SOLUTION
// function strCount(str, letter) {
//   let letterCounter = 0;
//   str.toLowerCase().split('').map((symbol) => symbol === letter ? letterCounter += 1 : 0);
//   console.log(letterCounter);
// }

// OR BEST PRACTICES & CLEVER

// function strCount(str, letter){  
//   console.log(str.split(letter).length - 1);
// }

// strCount("Hello", 'o'); // returns 1
// strCount("Hello", 'l'); // returns 2
// strCount("Belebekha", 'e'); // returns 3
// strCount("Hello World", 'o'); // returns 2
// strCount("Youtube", 'u'); // returns 2
// strCount("", 'z'); // returns 0
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////



// CODEWARS TASK - JS - Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// START OF SOLUTION
// function high(string){
//   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   let wordsArray = string.toLowerCase().split(' ').reverse();  
//   let high = 0;
//   let number;
//   let numbersArray = [].reverse();
//   let objectNumbersWords = {};    
    
//   wordsArray.map(word => {
//     number = word.split('').map(letter =>
//       alphabet.indexOf(letter) + 1).reduce((acc, value) => acc + value, 0);
//     numbersArray.push(number)
//   });
  
//   numbersArray.forEach((elem, index) => {
//     objectNumbersWords[elem] = wordsArray[index];
//   });

//   const maxNumber = Math.max(...Object.keys(objectNumbersWords));
  
//   for (const key of Object.keys(objectNumbersWords)) {    
//     if (Number(key) === maxNumber) {
//       console.log(objectNumbersWords[maxNumber])
//     }
//   } 
// }

// OR BEST (CLEVER) SOLUTION

// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   console.log(s.split(' ')[as.indexOf(Math.max(...as))]);
// }

// high('man i need a taxi up to ubud');               // 'taxi'
// high('what time are we climbing up the volcano');   // 'volcano' 
// high('take me to semynak');                         // 'semynak'   
// high('aa b');                                       // 'aa'
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////





// CODEWARS TASK - JS - Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input-- > Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// START OF SOLUTION
// var number = function (array) {
//   let newArray = [];
//   for (let i = 1; i <= array.length; i += 1) {
//     newArray.push(`${i}: ${array[i-1]}`);
//   }
//   console.log(newArray);
// }

// number([]);              // []
// number(["a", "b", "c"]); // ["1: a", "2: b", "3: c"]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////


// CODEWARS TASK - JS - Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// START OF SOLUTION
// function areYouPlayingBanjo(name) {
//   if (name.toLowerCase().startsWith('r')) {
//     console.log(`${name} plays banjo`);
//   } else {
//     console.log(`${name} does not play banjo`);
//   };  
// }

// OR

// function areYouPlayingBanjo(name) {  
//   return name.toLowerCase().startsWith('r')
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// areYouPlayingBanjo("Adam");  // "Adam does not play banjo");
// areYouPlayingBanjo("Paul");  // "Paul does not play banjo");
// areYouPlayingBanjo("Ringo"); // "Ringo plays banjo");
// areYouPlayingBanjo("bravo"); // "bravo does not play banjo");
// areYouPlayingBanjo("rolf");  // "rolf plays banjo");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Reversed sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// START OF SOLUTION
// const reverseSeq = n => {
//   const array = [];
//   for (let i = 1; i <= n; i += 1) {
//     array.unshift(i);
//   };
//   console.log(array);  
// };

// reverseSeq(5);  // [5, 4, 3, 2, 1]
// END OF SOLUTION




// CODEWARS TASK - JS - Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// Simple, remove the spaces from the string, then return the resultant string.

// START OF SOLUTION
// function noSpace(x){
//   const result = String(x.split(' ').join(''));
//     console.log(result);
// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');               // '8j8mBliB8gimjB8B8jlB'
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd');   // '88Bifk8hB8BB8BBBB888chl8BhBfd'
// noSpace('8aaaaa dddd r     ');                            // '8aaaaaddddr'
// END OF SOLUTION




// CODEWARS TASK - JS - Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// Your task is to make a function that can take any non - negative integer as an argument and
// return it with its digits in descending order.Essentially, rearrange the digits to create
// the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// START OF SOLUTION
// function descendingOrder(n){  
//   const result = parseInt(String(n).split('').sort().reverse().join(''));
//   console.log(result);
// }

// descendingOrder(0);         // 0 
// descendingOrder(1);         // 1
// descendingOrder(111);       // 111
// descendingOrder(15);        // 51
// descendingOrder(1021);      // 2110
// descendingOrder(123456789); // 987654321

// END OF SOLUTION




// CODEWARS TASK - JS - Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

// Given a month as an integer from 1 to 12, return to which quarter of the year it
// belongs as an integer number.
// For example: month 2(February), is part of the first quarter; month 6(June), is
// part of the second quarter; and month 11(November), is part of the fourth quarter.
// Constraint: 1 <= month <= 12

// START OF SOLUTION
// const quarterOf = (month) => {
//   // Your code here

//   if (month < 4) {
//     return console.log(1);
//   }

//   if (month < 7) {
//     return console.log(2);    
//   }

//   if (month < 10) {
//     return console.log(3);    
//   }

//   if (month < 13) {
//     return console.log(4);    
//   }  
// }

// OR BEST SOLUTION

// const quarterOf = (month) => console.log(Math.ceil(month / 3));

// quarterOf(3)  // 1
// quarterOf(8)  // 3
// quarterOf(11) // 4
// END OF SOLUTION




// CODEWARS TASK - JS - Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string.You're given one parameter, the 
// original string.You don't have to worry with strings with less than two characters.

// START OF SOLUTION
// function removeChar(str){
//  //You got this!
//   console.log(str.slice(1, (str.length - 1)));
// };

// removeChar('eloquent'); // 'loquen'
// removeChar('country');  // 'ountr'
// removeChar('person');   // 'erso'
// removeChar('place');    // 'lac'
// END OF SOLUTION




// CODEWARS TASK - JS - Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// START OF SOLUTION
// String.prototype.toJadenCase = function () {
//   const result = this.split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
  
//   console.log(result)  
// };

// const str = "How can mirrors be real if our eyes aren't real";
// str.toJadenCase();
// END OF SOLUTION




// CODEWARS TASK - JS - Remove the minimum
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// START OF SOLUTION
// function removeSmallest(numbers) { 
//   let newArrayNumbers = numbers.slice(0);
//   newArrayNumbers.splice((newArrayNumbers.indexOf(Math.min(...newArrayNumbers))), 1);  
//   console.log(newArrayNumbers);  
// };

// removeSmallest([1, 2, 3, 4, 5]); // [2, 3, 4, 5]
// removeSmallest([5, 3, 2, 1, 4]); // [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1]); // [2, 2, 2, 1]
// removeSmallest([]);              // []
// END OF SOLUTION



// CODEWARS TASK - JS - Find the next perfect square!
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square 
// after the one passed as a parameter.Recall that an integral perfect square is an 
// integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then - 1 should be returned.
// You may assume the parameter is non - negative.

// Examples: (Input-- > Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


// START OF SOLUTION
// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise  
//   const result = Number.isInteger(Math.sqrt(sq)) ? Math.pow((Math.sqrt(sq) + 1), 2) : -1;
//   console.log(result);
//   // return -1;
// };

// findNextSquare(121);          // 144
// findNextSquare(625);          // 676
// findNextSquare(319225);       // 320356
// findNextSquare(15241383936);  // 15241630849
// findNextSquare(114);  // -1
// END OF SOLUTION




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
// function validatePIN(pin) {
//   const re = /^(\d{4}|\d{6})$/;
//   const result = re.test(pin);
//   console.log('pin: ', pin, result);  
// }

// validatePIN("1234");
// validatePIN("12345");
// validatePIN("123456");
// validatePIN("a234");
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