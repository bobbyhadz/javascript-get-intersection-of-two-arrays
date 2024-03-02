// EXAMPLE 1 - Get the Intersection of two Arrays in JavaScript

function getIntersection(a, b) {
  const set1 = new Set(a);
  const set2 = new Set(b);

  const intersection = [...set1].filter(element =>
    set2.has(element),
  );

  return intersection;
}

const arr1 = ['a', 'b', 'c', 'c'];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'a'];

// 👇️ ['a', 'b','c']
console.log(getIntersection(arr1, arr2));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Intersection of two or more Arrays using `reduce()`

// const arr1 = ['a', 'b', 'c', 'c'];
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'a'];
// const arr3 = ['a', 'b'];

// const arrays = [arr1, arr2, arr3];

// const intersection = arrays.reduce((accumulator, array) => {
//   return accumulator.filter(element => array.includes(element));
// });

// console.log(intersection);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Intersection of two or more Arrays using lodash

// import _ from 'lodash';

// const arr1 = ['a', 'b', 'c', 'c'];
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'a'];

// const intersection = _.intersection(arr1, arr2);
// console.log(intersection); // 👉️ [ 'a', 'b', 'c' ]

// const intersection3 = _.intersection(arr1, arr2, ['a', 'b']);
// console.log(intersection3); // 👉️ ['a', 'b']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Intersection of two Sets in JavaScript

// function getIntersection(setA, setB) {
//   const intersection = new Set(
//     [...setA].filter(element => setB.has(element)),
//   );

//   return intersection;
// }

// const set1 = new Set(['a', 'b', 'c']);
// const set2 = new Set(['a', 'b', 'd', 'e']);

// console.log(getIntersection(set1, set2)); // 👉️ {'a', 'b'}

// ------------------------------------------------------------------

// // EXAMPLE 5 - Find the Intersection of two Set objects using `for...of`

// function getIntersection(setA, setB) {
//   const intersection = new Set();

//   for (const element of setA) {
//     if (setB.has(element)) {
//       intersection.add(element);
//     }
//   }

//   return intersection;
// }

// const set1 = new Set(['a', 'b', 'c']);
// const set2 = new Set(['a', 'b', 'd', 'e']);

// console.log(getIntersection(set1, set2)); // 👉️ {'a', 'b'}
