function template() {
// CODEWARS TASK - JS -
// 


// START OF SOLUTION

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////
};


// CODEWARS TASK - JS - Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty? Then the result should be empty object literal, {}.

// START OF SOLUTION
function count(string) {
  const arrayFromString = string.split('');
  let object = {};  
  arrayFromString.map(i => object[i] = object[i] + 1 || 1);
  console.log(object);
  // return {};
}

count('');    // {});
count('a');   // {'a': 1});
count('ab');  // {'a': 1, 'b': 1});
count('aba'); // {'a': 2, 'b': 1});
count('ABC'); // {'A': 1, 'B': 1, 'C': 1});
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Sort Numbers
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
// Finish the solution so that it sorts the passed in array of numbers.If the
// function passes in an empty array or null / nil value then it should return an empty array.

// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// START OF SOLUTION
// function solution(nums){

//   console.log(nums ? nums.sort((a, b) => a - b) : []);
// };

// solution([1,2,3,10,5]);    //[1,2,3,5,10])
// solution(null);            //[])
// solution([]);              //[])
// solution([20, 2, 10]);     //[2,10,20])
// solution([2, 20, 10]);     //[2,10,20])
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - JavaScript Array Filter
// https://www.codewars.com/kata/514a6336889283a3d2000001/javascript
// JavaScript Arrays support a filter function (starting in JavaScript 1.6).
// Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// START OF SOLUTION
// function getEvenNumbers(numbersArray){
//   const evenNumbers = [];

//   numbersArray.map(num => {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     };
//   });
  
//   console.log(evenNumbers);
// };

// getEvenNumbers([1, 2, 3, 6, 8, 10]);  // [2, 6, 8, 10]
// getEvenNumbers([1, 2]);               // [2]
// getEvenNumbers([12, 14, 15]);         // [12, 14]
// getEvenNumbers([13, 15]);             // []
// getEvenNumbers([1, 3, 9]);            // []
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// START OF SOLUTION
// function findUniq(arr) {
//   arr.sort((a, b) => a - b);  
//   console.log(arr[0] === arr[1] ? arr.pop() : arr[0]);
// };
  
// findUniq([ 1, 0, 0 ]);          // 1);
// findUniq([ 0, 1, 0 ]);          // 1);
// findUniq([ 0, 0, 1 ]);          // 1);
// findUniq([ 1, 1, 1, 2, 1, 1 ]); // 2);
// findUniq([ 1, 1, 2, 1, 1 ]);    // 2);
// findUniq([ 3, 10, 3, 3, 3 ]);   // 10);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - L1: Bartender, drinks!
// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
// Complete the function that receives as input a string, and produces outputs
// according to the following table:
// Input	            Output
// "Jabroni"	        "Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	      "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	      "Your tax dollars"
// "Rapper"	          "Cristal"
// anything else	      "Beer"

// START OF SOLUTION
// function getDrinkByProfession(param){
//   const normalizeParam = param.toLowerCase();

//   switch (normalizeParam) {
//     case "jabroni":
//       console.log("Patron Tequila");
//       break;
    
//     case "school counselor":
//       console.log("Anything with Alcohol");
//       break;
    
//     case "programmer":
//       console.log("Hipster Craft Beer");
//       break;
    
//     case "bike gang member":
//       console.log("Moonshine");
//       break;
    
//     case "politician":
//       console.log("Your tax dollars");
//       break;
    
//     case "rapper":
//       console.log("Cristal");
//       break;
    
//     default:
//       console.log("Beer");
//       break;
//   };
// };

// getDrinkByProfession("jabrOni");          // "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// getDrinkByProfession("scHOOl counselor"); // "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// getDrinkByProfession("prOgramMer");       // "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// getDrinkByProfession("bike ganG member"); // "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// getDrinkByProfession("poLiTiCian");       // "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// getDrinkByProfession("rapper");           // "Cristal", "'Rapper' should map to 'Cristal'");
// getDrinkByProfession("pundit");           // "Beer", "'Pundit' should map to 'Beer'");
// getDrinkByProfession("Pug");              // "Beer", "'Pug' should map to 'Beer'");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third
// goes into team 1, and so on.

// Task
// Given an array of positive integers(the weights of the people),
// return a new array / tuple of two integers, where the first one
// is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

// START OF SOLUTION
// function rowWeights(array){
//   let sumEven = 0;
//   let sumOdd = 0;

//   array.map((value, index) => {    
//     if (index % 2 === 0) {
//       sumEven += value;
//     };
//     if (index % 2 !== 0) {
//       sumOdd += value;
//     };
//   });
  
//   console.log([sumEven, sumOdd]);
// };

// rowWeights([80]);                       // [80,0]);
// rowWeights([100,50]);                   // [100,50]);
// rowWeights([50,60,70,80]);              // [120,140]);
// rowWeights([13,27,49]);                 // [62,27]);
// rowWeights([70,58,75,34,91]);           // [236,92]);
// rowWeights([29,83,67,53,19,28,96]);     // [211,164]);
// rowWeights([0]);                        // [0,0]);
// rowWeights([100,51,50,100]);            // [150,151]);
// rowWeights([39,84,74,18,59,72,35,61]);  // [207,235]);
// rowWeights([0,1,0]);                    // [0,1]);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Holiday VIII - Duty Free
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.

// START OF SOLUTION
// function dutyFree(normPrice, discount, hol){
//   console.log(Math.floor(hol / (normPrice * discount) * 100));
// }

// dutyFree(12, 50, 1000); // 166);
// dutyFree(17, 10, 500);  // 294);
// dutyFree(24, 35, 3000); // 357);   
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Convert to Binary
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
// Task Overview
// Given a non - negative integer n, write a function to_binary/ToBinary which
// returns that number in a binary format.

// START OF SOLUTION
// function toBinary(n){
//   console.log(Number(n.toString(2)))
// };

// toBinary(1); // 1
// toBinary(2); // 10
// toBinary(3); // 11
// toBinary(5); // 101
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// This time we want to write calculations using functions and get the results.Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// START OF SOLUTION
// function zero(f)  { return (f ? f(0) : 0) };
// function one(f)   { return (f ? f(1) : 1) };
// function two(f)   { return (f ? f(2) : 2) };
// function three(f) { return (f ? f(3) : 3) };
// function four(f)  { return (f ? f(4) : 4) };
// function five(f)  { return (f ? f(5) : 5) };
// function six(f)   { return (f ? f(6) : 6) };
// function seven(f) { return (f ? f(7) : 7) };
// function eight(f) { return (f ? f(8) : 8) };
// function nine(f)  { return (f ? f(9) : 9) };

// function plus(y)      { return function (x) { return (x + y) } };
// function minus(y)     { return function (x) { return (x - y) } };
// function times(y)     { return function (x) { return (x * y) } };
// function dividedBy(y) { return function (x) { return Math.floor(x / y) } };

// seven(times    (five ()));   // 35);
// four (plus     (nine ()));   // 13);
// eight(minus    (three()));   //  5);
// six  (dividedBy(two  ()));   //  3);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Alternate capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
// Given a string, capitalize the letters that occupy even indexes and odd indexes
// separately, and return as shown below.Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

// START OF SOLUTION
// function capitalize(s){
//   const arr = s.split('');
  
//   const result = [
//     arr.map((symbol, i) => i % 2 === 0 ? symbol.toUpperCase() : symbol.toLowerCase()).join(''),
//     arr.map((symbol, i) => i % 2 !== 0 ? symbol.toUpperCase() : symbol.toLowerCase()).join('')
//   ];
  
//   console.log(result);
// };

// capitalize("abcdef");       // ['AbCdEf', 'aBcDeF']);
// capitalize("codewars");     // ['CoDeWaRs', 'cOdEwArS']);
// capitalize("abracadabra");  // ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
// capitalize("codewarriors"); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Is this a triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// Implement a function that accepts 3 integer values a, b, c.The function
// should return true if a triangle can be built with the sides of given
// length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// START OF SOLUTION
// function isTriangle(a, b, c) {
//   const p = (a + b + c) / 2;
//   const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  
//   console.log(triangleArea && a > 0 && b > 0 && c > 0 ? true : false);
// };

// isTriangle(1, 2, 2);  // true);
// isTriangle(7, 2, 2);  // false);
// isTriangle(3, 3, -2); // false);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// START OF SOLUTION
// function getGrade (s1, s2, s3) {
//   const averageScore = Math.round((s1 + s2 + s3) / 3);  

//   if (averageScore >= 90) {
//     console.log('A');
//   };

//   if (averageScore >= 80 && averageScore < 90) {
//     console.log('B');
//   };

//   if (averageScore >= 70 && averageScore < 80) {
//     console.log('C');
//   };

//   if (averageScore >= 60 && averageScore < 70) {
//     console.log('D');
//   };

//   if (averageScore > 0 && averageScore < 60) {
//     console.log('F');
//   };

//   if (!averageScore) {
//     console.log('F');
//   };
// };

// // 90 <= score <= 100	'A'
// // 80 <= score < 90	'B'
// // 70 <= score < 80	'C'
// // 60 <= score < 70	'D'
// // 0 <= score < 60	'F'

// getGrade(95, 90, 93);  // 'A'
// getGrade(100, 85, 96); // 'A' 
// getGrade(92, 93, 94);  // 'A'
// getGrade(70, 70, 100); // 'B')
// getGrade(82, 85, 87);  // 'B')
// getGrade(84, 79, 85);  // 'B')
// getGrade(89, 89, 90);  // 'B')
// getGrade(70, 70, 70);  // 'C')
// getGrade(75, 70, 79);  // 'C')
// getGrade(60, 82, 76);  // 'C')
// getGrade(65, 70, 59);  // 'D')
// getGrade(66, 62, 68);  // 'D')
// getGrade(58, 62, 70);  // 'D')
// getGrade(44, 55, 52);  // 'F')
// getGrade(48, 55, 52);  // 'F')
// getGrade(58, 59, 60);  // 'F')
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Find the Remainder
// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
// Write a function that accepts two integers and returns the remainder of
// dividing the larger value by the smaller value.
// Division by zero should return NaN.

// START OF SOLUTION
// function remainder(n, m) {
//   console.log(n > m ? n % m : m % n)
// };

// remainder(17, 5);  // 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
// remainder(13, 72); // 7 remainder(72, 13), 'The order the arguments are passed should not matter');
// remainder(1, 0);   // 'Divide by zero should return NaN');
// remainder(0, 0);   // 'Divide by zero should return NaN');
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
// Define a method hello that returns "Hello, Name!" to a given name,
// or says Hello, World! if name is not given(or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return
// a name with a first capital letter(Xxxx).

// START OF SOLUTION
// function hello(name) {
//   if (name) {
//     const normalizedString = name.toLowerCase();
//     const firstLetter = normalizedString.charAt(0).toUpperCase();
//     const nameWithoutFirstLetter = normalizedString.slice(1);

//     console.log(`Hello, ${firstLetter.concat(nameWithoutFirstLetter)}!`);
//   } else {
//     console.log(`Hello, World!`);
//   };
// }

// hello('alice'); // 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
// hello();        // 'Hello, World!', "returns 'Hello, World!' when name is not given");
// hello('');      // 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// Create a function called shortcut to remove the lowercase vowels(a, e, i, o, u)
//  in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -- > "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// START OF SOLUTION
// function shortcut (string) {
//   const vowels = /[a,e,i,o,u]/g;
//   console.log(string.replace(vowels, ''));
// };

// shortcut('hello');              // 'hll'
// shortcut('how are you today?'); // 'hw r y tdy?'
// shortcut('complain');           // 'cmpln'
// shortcut('never');              // 'nvr'
// shortcut('HELLO');              // 'HELLO'
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string

// START OF SOLUTION
// function reverseLetter(str) {  
//   const regExp = /[^a-z]+/g;
//   console.log(str.replace(regExp, '').split('').reverse().join(''));
// };

// reverseLetter("krishan");   // "nahsirk")
// reverseLetter("ultr53o?n"); // "nortlu")
// reverseLetter("ab23c");     // "cba")
// reverseLetter("krish21an"); // "nahsirk")
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Binary Addition
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
// Implement a function that adds two numbers together and returns
// their sum in binary.The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// START OF SOLUTION
// function addBinary(a, b) {
//   console.log(Number(a + b).toString(2));    
// };

// addBinary(1, 1);
// addBinary(1, 2);
// addBinary(5, 9);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
// Wolves have been reintroduced to Great Britain.You are a sheep farmer,
// and are now plagued by wolves which pretend to be sheep.Fortunately,
// you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten.
// Remember that you are standing at the front of the queue which is at
// the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7 If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// START OF SOLUTION
// function warnTheSheep(queue) {
//   const wolfOfIndex = queue.reverse().indexOf('wolf');
  
//   if (wolfOfIndex > 0) {
//     return console.log(`Oi! Sheep number ${wolfOfIndex}! You are about to be eaten by a wolf!`);
//   } else {
//     console.log(`Pls go away and stop eating my sheep`);
//   };
  
//   // OR

//   // const wolfOfIndex = queue.reverse().indexOf('wolf');
  
//   // return wolfOfIndex === 0
//   //   ? console.log(`Pls go away and stop eating my sheep`)
//   //   : console.log(`Oi! Sheep number ${wolfOfIndex}! You are about to be eaten by a wolf!`);     
// };

// warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]);
// // "Oi! Sheep number 2! You are about to be eaten by a wolf!"

// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// // "Oi! Sheep number 5! You are about to be eaten by a wolf!"

// warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]);
// // "Oi! Sheep number 6! You are about to be eaten by a wolf!"

// warnTheSheep(["sheep", "wolf", "sheep"]);
// // "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// warnTheSheep(["wolf"]);
// // "Pls go away and stop eating my sheep"
    
// warnTheSheep(["sheep", "sheep", "wolf"]);
// // "Pls go away and stop eating my sheep"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Build a pile of Cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

// START OF SOLUTION
// function findNb(m) {
//   let sum = 0;
//   let i = 1;

//   while ( sum < m ) {
//     sum += Math.pow(i, 3);
//     if ( sum === m ) {
//       console.log(i);
//     };
//     i += 1;    
//   };
//   return -1;
// }

// findNb(4183059834009);   // 2022
// findNb(24723578342962);  // -1
// findNb(135440716410000); // 4824
// findNb(40539911473216);  // 3568
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]

// START OF SOLUTION
// function multiplicationTable(size) {  
//   let result = [];
//   for(let i = 1; i <= size; i += 1) {
//     let arr = [];
//     for(let j = 1; j <= size; j += 1) {
//       arr.push(i * j);
//     };
//     result.push(arr);
//   };
//   console.log(result);
// };

// multiplicationTable(3); // [[1,2,3], [2,4,6], [3,6,9]]
// multiplicationTable(4); // [[1,2,3], [2,4,6], [3,6,9]]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Is he gonna survive?
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a
// couple of powerful dragons! each dragon takes 2 bullets to be
// defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and
// move forward to fight another specific given number of dragons,
// will he survive ?
// Return true if yes, false otherwise :)

// START OF SOLUTION
// function hero(bullets, dragons){
//   console.log(bullets >= dragons * 2)
// }

// hero(10, 5);   // true);
// hero(7, 4);    // false);
// hero(4, 5);    // false);
// hero(100, 40); // true);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// What if we need the length of the words separated by a space to be added at
// the end of that same word and have it returned as an array ?
// Your task is to write a function that takes a String and returns an Array / list
// with the length of each word added to each element.
// Note: String will have at least one element; words will always be separated by a space.
  
// START OF SOLUTION
// function addLength(str) {
//   const result = [];
//   str.split(' ').map(word => {
//     result.push(`${word} ${word.length}`);
//   });
//   console.log(result);
// };

// addLength('apple ban');     // ["apple 5", "ban 3"]
// addLength('you will win');  // ["you 3", "will 4", "win 3"]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - No zeros for heros
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// START OF SOLUTION
// function noBoringZeros(n) {  
//   while (n != 0 && n % 10 === 0) {
//     n = n / 10;
//   };
//   console.log(n);
// };

// noBoringZeros(1450);   // 145)
// noBoringZeros(960000); // 96)
// noBoringZeros(1050);   // 105)
// noBoringZeros(-1050);  // -105)
// noBoringZeros(-105);   // -105)
// noBoringZeros(0);      // 0)
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Sum of Minimums!
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
// Given a 2D(nested) list(array, vector, ..) of size m * n, your task is
// to find the sum of the minimum values in each row.

// START OF SOLUTION
// function sumOfMinimums(arr) {
//   let sumMinimums = 0;
//   arr.map(nums =>
//     sumMinimums += Math.min(...nums)
//   );
//   console.log(sumMinimums);
// }

// sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]);              // 9
// sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]); // 76
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Find the position!
// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// START OF SOLUTION
// function position(letter) {
//   const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//     'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
//     'Y', 'Z'];
  
//   const letterPosition = alphabetArray.indexOf(letter.toUpperCase()) + 1;
//   console.log(`Position of alphabet: ${letterPosition}`);
// };

// clever and best solution
// function position(letter) {
//   const result = `Position of alphabet: ${letter.charCodeAt() - 96}`;
//   console.log(result);
// };

// position("a");  // "Position of alphabet: 1");
// position("z");  // "Position of alphabet: 26");
// position("e");  // "Position of alphabet: 5");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// Write a function that when given a URL as a string, parses out just the domain
// name and returns it as a string.

// START OF SOLUTION
// function domainName(url){
//   console.log(url.replace(/.+\/\/|www.|\..+/g, ''));  
// };

// domainName("http://google.com");    // "google");
// domainName("http://google.co.jp");  // "google");
// domainName("www.xakep.ru");         // "xakep");
// domainName("https://youtube.com");  // "youtube");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68] => [-85, 72, 0, 68]

// START OF SOLUTION
// function multipleOfIndex(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % i === 0) {
//       result.push(array[i]);
//     };
//   };

//   console.log(result);  
// };

// // clever and best solution
// // return array.filter((num, i) => num % i === 0);

// multipleOfIndex([22, -6, 32, 82, 9, 25]); // [-6, 32, 25]);
// multipleOfIndex([68, -1, 1, -7, 10, 10]); // [-1, 10]);
// multipleOfIndex([11, -11]); // [-11]);
// multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]); // [-85, 72, 0, 68]);
// multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]); // [38, -44, -99]);
// multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]); // [-49, 8, -60, 35]);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
// You are given two sorted arrays that both only contain integers.Your task is to
// find a way to merge them into a single one, sorted in asc order.Complete the
// function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0
// or more Integers.If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders.Also arr1 and arr2 may have
// same integers.Remove duplicated in the returned result.

// START OF SOLUTION
// function mergeArrays(arr1, arr2) {
//   const commonArray = arr1.concat(arr2);
//   let uniqueCharsInArray = [...new Set(commonArray)]; 
//   console.log(uniqueCharsInArray.sort((a, b) => a - b));
// };

// mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]);                        // [1,2,3,4,5,6,7,8], "Basic tests");
// mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);                 // [1,2,3,4,5,6,7,8,9,10], "Basic tests");
// mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);  // [1,2,3,4,5,7,9,10,11,12], "Basic tests");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Reversing Words in a String
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
// You need to write a function that reverses the words in a given string.
// A word can also fit an empty string.If this is not clear enough,
// here are some examples:
// As the input may have trailing spaces, you will also need to ignore
// unneccesary whitespace.
// Example(Input-- > Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// START OF SOLUTION
// function reverse(string){
//   console.log(string.split(' ').reverse().join(' '));
// };

// reverse('I am an expert at this');  // 'this at expert an am I');
// reverse('This is so easy');         // 'easy so is This');
// reverse('no one cares');            // 'cares one no');
// reverse('');                        // '');
// reverse('CodeWars');                // 'CodeWars');
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// START OF SOLUTION
// function highAndLow(numbers) {
//   const arrayNumbers = numbers.split(' ');
//   const maxNumber = Math.max(...arrayNumbers);
//   const minNumber = Math.min(...arrayNumbers);
//   console.log(String(maxNumber) + ' ' + String(minNumber));
// };

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"
// highAndLow("1 2 3");                        // "3 1"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Consider an array / list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array(true means
// present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true, true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined 

// START OF SOLUTION
// function countSheeps(arrayOfSheep) {
//   let countOfSheep = 0;

//   arrayOfSheep.map(sheep => {
//     if (sheep) {
//       countOfSheep += 1;
//     }
//   });

//   console.log(countOfSheep);
// }
// // END OF SOLUTION

// const array1 = [true,  true,  true,  false,
// true,  true,  true,  true ,
// true,  false, true,  false,
// true,  false, false, true ,
// true,  true,  true,  true ,
// false, false, true,  true ]

// countSheeps(array1);    // 17
//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

// START OF SOLUTION
// function otherAngle(a, b) {
//   console.log(180 - (a + b);)
// }

// otherAngle(30, 60); // 90);
// otherAngle(60, 60); // 60);
// otherAngle(43, 78); // 59);
// otherAngle(10, 20); // 150);

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// START OF SOLUTION
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     console.log(`Draw!`);
//   }
//   if (p1 === 'rock' && p2 === 'scissors') {
//     console.log(`Player 1 won!`);
//   } else if (p1 === 'paper' && p2 === 'rock') {
//     console.log(`Player 1 won!`);
//   } else if (p1 === 'scissors' && p2 === 'paper') {
//     console.log(`Player 1 won!`);
//   } else {
//     console.log(`Player 2 won!`);
//   }  
// };

// rps('rock', 'scissors');  // getMsg(1));
// rps('scissors', 'paper'); // getMsg(1));
// rps('paper', 'rock');     // getMsg(1));
// rps('rock', 'paper');     // getMsg(2));
// rps('rock', 'rock');      // getMsg(Draw));
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667/javascript
// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

// START OF SOLUTION
// var uniqueInOrder = function (iterable) {
//   const array = [];

//   for (let i = 0; i < iterable.length; i += 1) {
//     if (iterable[i] !== iterable[i + 1]) {
//       array.push(iterable[i]);
//     }
//   };

//   console.log(array);
// };

// uniqueInOrder('AAAABBBCCDAABBB'); // ['A','B','C','D','A','B']
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Bin to Decimal
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// Complete the function which converts a binary number(given as a string)
// to a decimal number.

// START OF SOLUTION
// function binToDec(bin){
//   console.log(parseInt(bin, 2));
// };

// function binToDec(bin) {
//   const binReversedArray = bin.split('').reverse();
//   let decimalArray = []; 

//   for (let i = 0; i < binReversedArray.length; i += 1) {
//     decimalArray.push(binReversedArray[i] * Math.pow(2, i));    
//   };
  
//   const result = decimalArray.reduce((acc, value) => acc + value);
//   console.log(result)
// };

// binToDec('0');       // 0
// binToDec('1');       // 1
// binToDec('1001001'); // 73
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// Timmy & Sarah think they are in love, but around where they live, they will
// only know once they pick a flower each.If one of the flowers has an even
// number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return
// true if they are in love and false if they aren't.

// START OF SOLUTION
// function lovefunc(flower1, flower2){
//   console.log(flower1 % 2 !== flower2 % 2);
// };

// lovefunc(1,4);           // true)
// lovefunc(2,2);           // false)
// lovefunc(0,1);           // true)
// lovefunc(0,0);           // false)
// lovefunc(undefined);     // true)
// lovefunc(undefined, 1);  // true)
// lovefunc();              // true)
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
// The first input array is the key to the correct answers to an exam,
// like["a", "a", "b", "d"].The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length.Return the score for
// this array of answers, giving + 4 for each correct answer, -1 for each
// incorrect answer, and + 0 for each blank answer, represented as an empty
// string(in C the space character is used).
// If the score < 0, return 0.

// START OF SOLUTION
// function checkExam(array1, array2) {  
//   let result = 0;
  
//   for (let i = 0; i < array1.length; i += 1) {
//     !array2[i]
//       ? result += 0 
//       : array1[i] === array2[i]
//         ? result += 4
//         : result -= 1;    
//   };
//   console.log(result < 0 ? 0 : result);
// };

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]); // 6);
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]); // 7);
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); // 16);
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]); // 0); 
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks
// from a given string.

// START OF SOLUTION
// function removeExclamationMarks(s) {
//   // console.log(s.split('').map(symbol => symbol.replace(/!/, )));
//   console.log(s.replaceAll(/!/g, ''));
// };

// removeExclamationMarks("Hello World!"); // "Hello World"
// removeExclamationMarks("Hello World!!"); // "Hello World"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
// You are given an odd - length array of integers, in which all of them are the same,
// except for one single number.
// Complete the method which accepts such an array, and returns that single different
// number.
// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// START OF SOLUTION
// function stray(numbers) {
//   console.log(numbers.reduce((a, b) => a ^ b));
// };

// stray([1, 1, 2]); // 2
// stray([1, 2, 1]); // 2
// stray([2, 1, 1]); // 2
// stray([17, 17, 3, 17, 17, 17, 17]); // 3
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number.the number 1 should be appended to the
// new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// START OF SOLUTION
// function incrementString (string) {    
//   console.log(string.replace(/([0-8]|\d?9+)?$/, num => num ? +num + 1 : 1));
// }

// incrementString("foobar000");    // "foobar001"
// incrementString("foobar999");    // "foobar1000"
// incrementString("foobar00999");  // "foobar01000"
// incrementString("foo");          // "foo1"
// incrementString("foobar001");    // "foobar002"
// incrementString("foobar1");      // "foobar2"
// incrementString("1");            // "2"
// incrementString("009");          // "010"
// incrementString("fo99obar99");   // "fo99obar100"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//   Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// START OF SOLUTION
// function replace(s){  
//   const newString = s.replace(/[aeiou]/gi, '!');
//   console.log(newString);
// }

// replace("Hi!");      // "H!!"
// replace("!Hi! Hi!"); // "!H!! H!!"
// replace("aeiou");    // "!!!!!"
// replace("ABCDE");    // "!BCD!"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Summing a number's digits
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
// Write a function named sumDigits which takes a number as input and returns
// the sum of the absolute value of each of the number's decimal digits.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 -- > 5
// Let's assume that all numbers in the input will be integer values.

// START OF SOLUTION
// function sumDigits(number) { 
//   const initialValue = 0;
//   const numArr = [];
//   number.toString().split('').map(symbol => {
//     if (symbol > 0) {
//       numArr.push(Number(symbol));
//     };
//   }); 
  
//   console.log(numArr.reduce((acc, num) => acc + num, initialValue));
// };

// Best Practices and Clever
// function sumDigits(number) {
//   console.log(Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0)); 
// };

// sumDigits(10);  // 1
// sumDigits(99);  // 18
// sumDigits(-32); // 5
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Write Number in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.
// For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// START OF SOLUTION
// function expandedForm(num) { 
//   const numArr = num.toString().split('');
//   const newArr = [];

//   numArr.map(function (digit, index) {    
//     const power = numArr.length - index - 1;
    
//     if (digit > 0) {
//       newArr.push(digit * Math.pow(10, power));  
//     };    
//   });

//   console.log(newArr.join(' + '));
// };

// expandedForm(12);    // '10 + 2'
// expandedForm(42);    // '40 + 2'
// expandedForm(70304); // '70000 + 300 + 4'
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Name Shuffler
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input-- > Output)
// "john McClane" --> "McClane john"

// START OF SOLUTION
// function nameShuffler(str){
//   console.log(str.split(' ').reverse().join(' '))
// }

// nameShuffler('john McClane');  // 'McClane john')
// nameShuffler('Mary jeggins');  // 'jeggins Mary'
// nameShuffler('tom jerry');     // 'jerry tom'
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/javascript
// Your task is to make two functions(max and min, or maximum and minimum, etc.,
// depending on the language) that receive a list of integers as input, and return
// the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// START OF SOLUTION
// var min = function (list) {
//   console.log(list.sort(function (a, b) { return a - b })[0]);
// };

// var max = function (list) {
//   console.log(list.sort(function (a, b) { return a - b }).reverse()[0]);
// };

// // Best Practices and Clever
// // const min = (list) => console.log(Math.min(...list));
// // const max = (list) => console.log(Math.max(...list));

// min([-52, 56, 30, 29, -54, 0, -110]); // -110
// min([42, 54, 65, 87, 0]);             // 0
// max([4, 6, 2, 1, 9, 63, -134, 566]);  // 566
// max([5]);                             // 5
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Small enough? - Beginner
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
// You will be given an array and a limit value.You must check that all values
// in the array are below or equal to the limit value.If they are, return true.
// Else, return false.

// You can assume all values in the array are numbers.

// START OF SOLUTION
// function smallEnough(a, limit) {
//   const resultArr = [];

//   a.map(element => {
//     (element > limit) ? resultArr.push(false) : resultArr.push(true);
//   });
//   // console.log(resultArr)
//   console.log(resultArr.includes(false) ? false : true);
// };

// Best Practices and Clever
// function smallEnough(a, limit){  
//   const result = Math.max(...a) <= limit;
//   console.log(result);
// }

// smallEnough([66, 101], 200);                              // true
// smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100); // false
// smallEnough([101, 45, 75, 105, 99, 107], 107);            // true
// smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120);  // true
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// START OF SOLUTION
// function longest(s1, s2) {  
//   const commonArr = s1.concat(s2).split('');  
  
//   const result = commonArr.filter((elem, index) => {
//     return commonArr.indexOf(elem) === index;
//   })
//   console.log(result.sort().join(''));
// };

// longest("aretheyhere", "yestheyarehere"); // "aehrsty"
// longest("loopingisfunbutdangerous", "lessdangerousthancoding"); // "abcdefghilnoprstu"
// longest("inmanylanguages", "theresapairoffunctions"); // "acefghilmnoprstuy"
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Drink about
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input-- > Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// START OF SOLUTION
// function peopleWithAgeDrink(old) {
//   if (old < 14) {
//     console.log('drink toddy');
//     return;
//   };
//   if (old < 18) {
//     console.log('drink coke');
//     return;
//   };
//   if (old >= 18 && old < 21) {
//     console.log('drink beer');
//     return;
//   };
//   if (old >= 21) {
//     console.log('drink whisky');
//     return;
//   };  
// };

// peopleWithAgeDrink(13);
// peopleWithAgeDrink(17);
// peopleWithAgeDrink(18);
// peopleWithAgeDrink(20);
// peopleWithAgeDrink(30);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




//////////////////////////////
// return {
//     0 : 'no one likes this',
//     1 : `${names[0]} likes this`,
//     2 : `${names[0]} and ${names[1]} like this`,
//     3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)]

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;
  
//     case 1:
//       return `${names[0]} likes this`;
  
//     case 2:
//       return `${names[0]} and ${names[1]} likes this`;
  
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} likes this`;

//     default:
//       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// likes([]);
// likes(['Peter']);
// likes(['Jacob', 'Alex']);
// likes(['Max', 'John', 'Mark']);
// likes(['Alex', 'Jacob', 'Mark', 'Max']);
//////////////////////////////////////




// CODEWARS TASK - JS - Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// START OF SOLUTION
// const binaryArrayToNumber = arr => {  
//   // let result = 0;
//   // const arrReversed = arr.reverse();  
//   // for (let i = 0; i < arrReversed.length; i += 1) {    
//   //   if (arrReversed[i] === 1) {      
//   //     result += Math.pow(2, i);
//   //   };
//   // };
//   // console.log(result)

//   // Best Practices an Clever  
//   const result = parseInt(arr.join(""), 2)
//   console.log(result)

// };

// binaryArrayToNumber([0,0,0,1]);  // 1
// binaryArrayToNumber([0,0,1,0]);  // 2
// binaryArrayToNumber([1,1,1,1]);  // 15
// binaryArrayToNumber([0,1,1,0]);  // 6
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Is the string uppercase?
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
// Task
// Create a method to see whether the string is ALL CAPS.
//   Examples(input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// START OF SOLUTION
// String.prototype.isUpperCase = function (string) {
//   console.log(
//     !this ? false : this.toString() === this.toUpperCase() ? true : false
//   );
// };


// ''.isUpperCase();
// 'c'.isUpperCase();
// 'C'.isUpperCase();
// 'hello I AM DONALD'.isUpperCase();
// 'HELLO I AM DONALD'.isUpperCase();
// 'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase();
// 'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase();


// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
// Complete the function/method so that it returns the url
// with anything after the anchor(#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// START OF SOLUTION
// function removeUrlAnchor(url){  
//   const result = url.indexOf('#') < 0 ? url : url.slice(0, url.indexOf('#'));
//   console.log(result);
// };

// removeUrlAnchor('www.codewars.com#about');               // www.codewars.com
// removeUrlAnchor('www.codewars.com/katas/?page=1#about'); // www.codewars.com/katas/?page=1
// removeUrlAnchor('www.codewars.com/katas/');              // www.codewars.com/katas/
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// START OF SOLUTION
// function findShort(s) {
//   const array = s.split(' ').sort((a, b) => a.length - b.length )[0].length; 
//   console.log(array);
// }
// findShort("bitcoin take over the world maybe who knows perhaps");                // 3);
// findShort("turns out random test cases are easier than writing out basic ones"); // 3); 
// findShort("Let's travel abroad shall we");                                       // 2);
// findShort("Buy me a coffee");                                                    // 1);
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// START OF SOLUTION
// function removeEveryOther(arr) {  
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {    
//     if (i % 2 === 0) {
//       newArr.push(arr[i])
//     };    
//   };
//   console.log(newArr);
// }

// removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); //['Hello', 'Hello Again']
// removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);     // [1, 3, 5, 7, 9]
// removeEveryOther([[1, 2]]);                            // [[1, 2]])
// removeEveryOther([['Goodbye'], { 'Great': 'Job' }]);   // [['Goodbye']]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// START OF SOLUTION
// function accum(s) {  
//   let mumbling = [];
//   for (let i = 0; i < s.length; i += 1) {
//     mumbling.push(
//       (s[i].repeat(i + 1))[i].charAt(0).toUpperCase() +
//       (s[i].toLowerCase().repeat(i)));
//   };
//   console.log(mumbling.join('-'));
// };

// // Best Practices and Clever
// // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

// accum("ZpglnRxqenU"); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// accum("NyffsGeyylB"); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// accum("MjtkuBovqrU"); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// accum("EvidjUnokmM"); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// accum("HbideVbxncC"); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Round up to the next multiple of 5
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
// Given an integer as input, can you round it to the next(meaning, "greater
// than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// START OF SOLUTION
// function roundToNext5(n) {  
//   console.log(Math.ceil(n / 5) * 5 )
// };

// roundToNext5(0);   // 0
// roundToNext5(2);   // 5
// roundToNext5(3);   // 5
// roundToNext5(12);  // 15
// roundToNext5(21);  // 25
// roundToNext5(30);  // 30
// roundToNext5(-2);  // 0
// roundToNext5(-5);  // -5
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// The first century spans from the year 1 up to and including the year 100,
//   the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
//   Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// START OF SOLUTION
// function century(year) {
//   console.log(Math.ceil(year / 100));
// }

// century(1705); // 18, 'Testing for year 1705');
// century(1900); // 19, 'Testing for year 1900');
// century(1601); // 17, 'Testing for year 1601');
// century(2000); // 20, 'Testing for year 2000');
// century(89);   // 1,  'Testing for year 89');
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// Given a non - empty array of integers, return the result of multiplying the 
// values together in order.Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// START OF SOLUTION
// function grow(x){
//   let result = x.reduce((acc, num) => acc * num);
//   console.log(result);
// };

// grow([1, 2, 3]);          // 6
// grow([4, 1, 1, 1, 4]);    // 16
// grow([2, 2, 2, 2, 2, 2]); // 64
// grow([1, 2, 6]); // 12
// grow([2, 3, 4, 5, 6, 7]); // 5040
// grow([4, 4, 4, 4, 4, 4]); // 4096
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
// Write a function that checks if a given string (case insensitive) is
// a palindrome.

// START OF SOLUTION
// function isPalindrome(x) {  
//   console.log(x.toLowerCase().split('').reverse().join('') === x.toLowerCase())
// };

// isPalindrome("a");     // true));
// isPalindrome("aba");   // true));
// isPalindrome("Abba");  // true));
// isPalindrome("hello"); // false));
// isPalindrome("Bob");   // true));
// isPalindrome("Madam"); // true));
// isPalindrome("AbBa");  // true));
// isPalindrome("");      // true));
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// START OF SOLUTION
// function betterThanAverage(classPoints, yourPoints) {
//   const sumClassPoints = classPoints.reduce((acc, value) => acc + value);
//   const averageClassPoint = sumClassPoints / classPoints.length;
  
//   console.log(averageClassPoint < yourPoints)
// };

// betterThanAverage([2, 3], 5);                                // true
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);    // true
// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);  // false
// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);     // false
// betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);     // false
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// In this kata you will create a function that takes a list of non - negative 
// integers and strings and returns a new list with the strings filtered out.

// START OF SOLUTION
// function filter_list(l) {
//   // let filteredList = [];
//   // l.map(elem => {
//   //   if (Number.isInteger(elem)) {
//   //     filteredList.push(elem);
//   //   }
//   // })
//   // console.log(filteredList);

//   console.log(l.filter(num => Number.isInteger(num)))
// }

// filter_list([1, 2, 'a', 'b']);                // [1, 2]                 
// filter_list([1, 'a', 'b', 0, 15]);            // [1, 0, 15]          
// filter_list([1, 2, 'aasf', '1', '123', 123]); // [1, 2, 123]
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer
//  that is the square of an integer; in other words, it is the product
//  of some integer with itself.
// The tests will always use some integral number, so don't worry
// about that in dynamic typed languages.

// START OF SOLUTION
// var isSquare = function(n){
//   Number.isInteger(Math.sqrt(n)) ? true : false;  
// }

//     isSquare(-1) // false, "-1: Negative numbers cannot be square numbers");
//     isSquare( 0) // true, "0 is a square number (0 * 0)");
//     isSquare( 3) // false, "3 is not a square number");
//     isSquare( 4) // true, "4 is a square number (2 * 2)");
//     isSquare(25) // true, "25 is a square number (5 * 5)");
//     isSquare(26) // false, "26 is not a square number");
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




// CODEWARS TASK - JS - Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
// You're writing code to control your town's traffic lights.You need a
// function to handle each change from green, to yellow, to red, and then 
// to green again.
// Complete the function that takes a string as an argument representing 
// the current state of the light and returns a string representing the 
// state the light should change to.
// For example, when the input is green, output should be yellow.

// START OF SOLUTION
// function updateLight(current) {  
//   switch (current) {
//     case 'green':
//       return 'yellow'
//       break;
//     case 'yellow':
//       return 'red'
//       break;
//     case 'red':
//       return 'green'
//       break;
//     default:
//       break;
//   }
// }

//   updateLight("green")  // yellow
//   updateLight("yellow") // red
//   updateLight("red")    // green
// END OF SOLUTION

//////////////////////////////////////////////////////////////////////




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
// function sortByLength(array) {
  // const sortedArrayByWordLength = array.sort(function (a, b) {
  //   return a.length - b.length;
  // })
  // console.log(sortedArrayByWordLength)
  
  // OR

//   return array.sort((a, b) => a.length - b.length);
// };
// sortByLength(["Beg", "Life", "I", "To"]); // ["I", "To", "Beg", "Life"]
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