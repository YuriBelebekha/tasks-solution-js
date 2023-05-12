function template() {
// CODEWARS TASK - JS -
// 


// START OF SOLUTION

// END OF SOLUTION

//////////////////////////////////////////////////////////////////////
};



// CODEWARS TASK - JS - Bin to Decimal
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// Complete the function which converts a binary number(given as a string)
// to a decimal number.

// START OF SOLUTION
// function binToDec(bin){
//   console.log(parseInt(bin, 2));
// };

function binToDec(bin) {
  const binReversedArray = bin.split('').reverse();
  let decimalArray = []; 

  for (let i = 0; i < binReversedArray.length; i += 1) {
    decimalArray.push(binReversedArray[i] * Math.pow(2, i));    
  };
  
  const result = decimalArray.reduce((acc, value) => acc + value);
  console.log(result)
};

binToDec('0');       // 0
binToDec('1');       // 1
binToDec('1001001'); // 73
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