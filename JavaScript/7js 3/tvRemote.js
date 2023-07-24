/*
|--------------------------------------------------------------------------
| TV Remote
|--------------------------------------------------------------------------
|
*/

function tvRemote(word) {
   let keys = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
   let pos = [0, 0];
   let res = 0;
   for (let x of word) {
      let i = keys.indexOf(x);
      let temp = [(i / 8) | 0, i % 8];
      res += Math.abs(temp[0] - pos[0]) + Math.abs(temp[1] - pos[1]) + 1;
      pos = temp;
   }
   return res;
}


function tvRemote(word) {
   let kb = {'a':[0, 0], 'b':[0, 1], 'c':[0, 2], 'd':[0, 3], 'e':[0, 4], '1':[0, 5], '2':[0, 6], '3':[0, 7],
      'f':[1, 0], 'g':[1, 1], 'h':[1, 2], 'i':[1, 3], 'j':[1, 4], '4':[1, 5], '5':[1, 6], '6':[1, 7],
      'k':[2, 0], 'l':[2, 1], 'm':[2, 2], 'n':[2, 3], 'o':[2, 4], '7':[2, 5], '8':[2, 6], '9':[2, 7],
      'p':[3, 0], 'q':[3, 1], 'r':[3, 2], 's':[3, 3], 't':[3, 4], '.':[3, 5], '@':[3, 6], '0':[3, 7],
      'u':[4, 0], 'v':[4, 1], 'w':[4, 2], 'x':[4, 3], 'y':[4, 4], 'z':[4, 5], '_':[4, 6], '/':[4, 7]
   };
   let steps = 0;
   word
      .split("")
      .map((n) => kb[n])
      .reduce(
         (a, b) => {
            steps += Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + 1;
            return b;
         },
         [0, 0]
      );
   return steps;
}


console.log(tvRemote("does"), 16);
console.log(tvRemote("your"), 23);
console.log(tvRemote("solution"), 33);
console.log(tvRemote("work"), 20);
console.log(tvRemote("for"), 12);
console.log(tvRemote("these"), 27);
console.log(tvRemote("words"), 25);