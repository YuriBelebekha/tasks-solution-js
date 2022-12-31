




// CODEWARS TASK - JS - Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

// START OF SOLUTION
function sumMix(x){
  let sum = 0;
  x.forEach(element => {  
    if (element === undefined) {
      element = 1;
    }

    sum += Number(element);
  });  
  console.log(sum);  
}

sumMix([9, 3, undefined, '3'])                // 16
sumMix([9, 3, '7', '3'])                      // 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])     // 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 41
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