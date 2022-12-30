




// // CODEWARS TASK - JS - Sum without highest and lowest number
// // https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

// // Task
// // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// // Mind the input validation.

// // My solution

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