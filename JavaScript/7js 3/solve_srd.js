/*
|--------------------------------------------------------------------------
| Simple remove duplicates
|--------------------------------------------------------------------------
|
*/

function solve(arr) {
   return [...new Set(arr.reverse())].reverse();
}


function solve(arr) {
   return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}


function solve(arr) {
   return [...arr.reduceRight((acc, v) => acc.add(v), new Set())].reverse();
}


console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);