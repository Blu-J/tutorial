/* 
  Objects and Arrays
  ====================================

  Objects are a structure that will link a key (a string) to a value (anything, like strings, functions, or other objects).

  Cool, and functions are a subset of objects that you have a counted number of values.

*/

const o1 = {} // Here we have our first object, which is empty.
const o2 = {
  someValue: 'Hello',
} // Here we have an object with someValue, which is equal to 'Hello'

const o2_1 = o2.someValue //  'Hello', note this is a prefered method of getting values
const o2_2 = o2['someValue'] // 'Hello', note this is another method of getting values
const o2_3 = o2.anotherValue // undefined, note that when we access an value that doesn't exist it returns `nothing`

const o3_specialKey = 'somethingSpecial'
const o3 = {
  ['someValue' + 1]: 'Hello 2', // Note that we don't `need` the trailing comma, but I would recomend it. it is signifying a end of the key value pair
  [o3_specialKey]: {// Also note this is how we can calculate a name for the key, this still is a string value, but we could also use a variable as well
    a: 'a value', // We can put in an object for the values as well
  },
};
const o3_1 = o3.someValue1 // 'Hello 2'
const o3_2 = o3.somethingSpecial.a // 'a value'
const o3_3 = o3[o3_specialKey] === o3.somethingSpecial // true, indicating that the values are the same
const o3_4 = Object.keys(o3) // ['someValue1', 'somethingSpecial'], Note object .keys is nice to get the keys of an object

const o4 = {
  a: 'b'
}
const o5 = {
  a: 'b'
}

const o5_1 = o5 === o4 // false, Note that even though the structure and values are the same, the objects are not the same because of something called a pointer
    // A pointer is a reference in memory, all this structure is designed is for saying when you pass me around, I can give a structure to some values
    // But a pointer doesn't know that the other point is the same value in the end, and you could mess with the pointer of o5 and it will not effect the other
    // These are like address to houses, and even though the houses are the same in the sense that they look the same, and have the same items in them, we could go to one
    // of the houses, and mess one of the houses up and the other house is not messed up. This is called mutation, and this is a bad thing.

const o5_2 = o5.a === 'b' // true

const o6 = o5;
o6.a = 'b modified';
const o6_1 = o5.a === 'b' // false: Yup, we said 06 is the same address as 05, and we changed 06, which meant 05
const o6_2 = o5.a === 'b modified' // true
const o6_3 = o5.a === o6.a // true
const o6_4 = o4.a === 'b' // Yup, not the same 'house' as 05

const o7 = Object.assign({}, o6) // Here we are going to create a copy of 06, and store it into {}, then return that for 07
o7.a = 'b modified for o7'
const o7_1 = o7.a === o6.a // False, so we can copy, and then the changes wont effect the original


/* 
  Array
  ====================================

  Now we are going to go and learn arrays, multiple values
*/

const a1 = [] // Here we are going to start with the idea of a simple, empty arrays
const a1_1 = a1.length // 0 : Notice that the length of an empty array is 0

const a2 = [1, '2', 'three', { value: 'four' }, x => 'five'] // Here we have an array with several types of values
const a2_1 = a2.length // 5
const a2_2 = a2[0] // 1:  This is how we get the first value
const a2_3 = a2['0'] // undefined: Note that we get a nothing for the string of zero
const a2_4 = a2[100] // undefined: also get a nothing for something that is not there
const a2_5 = a2[a2.length - 1] // x => 'five', Note that we get the last item in the array with this method

// Mutations
const a2_6 = a2[1] === '2' // true
a2.length = 1
const a2_7 = a2[1] === undefined // true

const a3 = [1, 2]
const [a3_1, a3_2] = a3 // Here we can descructure to get out the values
a3_1 === 1 // true
a3_2 === 2 // true
const [,a3_3] = a3 // Note we can skip values in descructuring
a3_3 === a3_2 // true

const a4 = [5, 6]
const a5 = a3.concat(a4) // [1, 2, 5, 6]
const [a5_head, ...a5_rest] = a5 //Here we have destructuring with ..., which is like rest
const a6 = [a5_head, a5_rest] // [ 1, [2, 5, 6] ]: Note the nested array
const a7 = [a5_head, ...a5_rest, 9] // [ 1, 2, 5, 6, 9 ]: Note the ... and the non nested array


/* 
  Array Functions
  ====================================

  Here are some useful functinos for arrays

  First we are going to learn how to pull sections in an array, and insertions with slice operator
  [].slice(start number, end? number)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  Then we are going to learn about transformation functions, map and filter. These will transform the arrays into something else
  [].filter(fn: (x: value) => boolean)
  [].filter(fn: (x: value) => value)

  Then last we are going to learn the reduce, which is going to be the most powerful transformation
  [].reduce(fn: (accumulator: value, value: value) => nextAccumulator, starting Value)
*/

const referenceArray = [1, 2, 3, 4, 5, 6, 7, 8]
const af1 = [ ...referenceArray.slice(0, 1), ...referenceArray.slice(6) ] // [1, 7, 8]  Note the index to values in arrays, you will probably be off by 1, so double check yourself


// Filter 
// We are going to use the % operator, which is called the modulus operator. With regular division it gives you a value, well the remainder comes from this, the modulus operator
// You can think of the modulus operator like a clock, so 14:20 in modulus 12 means 2:20
// 8:30 modulus 12 is still 8:30
const af2 = referenceArray.filter(x => x % 2 === 0) // This is saying filter all values that are modulus 2 is zero, in human speak, evens
  // [2, 4, 6, 8]
const af3 = referenceArray.filter(x => x % 2 === 1) // This is going to find the odds
const answer_af3 = [] // Answer Question: What is af3?


const af4 = referenceArray.filter(x => true)
const answer_af4 = [] // Answer Question: What is af4?

const af5 = referenceArray.filter(x => x > 5)
const answer_af5 = [] // Answer Question: What is af5?

const af6 = [1, 2, 3].concat(referenceArray.slice(4, 6))
const answer_af6 = [] // Answer Question: What is af6


// Now for mapping, which is given this element, how to transform it to another value

const af7 = referenceArray.map(x => x * x) // So every value is going to be squared
af7 === [1, 4, 9, 16, 25, 36, 49, 64]
const answer_af7 = []

const af8 = referenceArray.map(x => 2 * x * x - 4 * x + 3)
const answer_af8 = []

const af9 = referenceArray.filter(x => x % 2 === 0).map(x => x * x)
const answer_af9 = []

// Now for the most powerful, reducing
const sumAccumulator = (lastSumAnswer, value) => lastSumAnswer + value
const af10 = referenceArray.reduce(sumAccumulator, 0) // This is going to sum every value in the array
  // [1, 2, 3, 4, 5, 6, 7, 8], sumAccumulator(0, 1) => 1
  // [2, 3, 4, 5, 6, 7, 8], sumAccumulator(1, 2) => 3
  // [3, 4, 5, 6, 7, 8], sumAccumulator(3, 3) => 6
  // [4, 5, 6, 7, 8], sumAccumulator(6, 4) => 10
  // [5, 6, 7, 8], sumAccumulator(10, 5) => 15
  // [6, 7, 8], sumAccumulator(15, 6) => 21
  // [7, 8], sumAccumulator(21, 7) => 28
  // [8], sumAccumulator(28, 8) => 36
const answer_af10 = 0

/* So we see it takes two arguments:
    the first is an accumulator function
      The first param is the accumulator value, which is our tracked sum value
      the second param is the value in the array
    the second is the starting value
*/ 

const af11 = referenceArray.reduce((answerList, value) => value % 2 === 0 ? answerList.concat(value) : answerList, []) // Here we can reproduce logic of filter operator
const answer_af11 = []


const af12 = referenceArray.reduce((answerList, value) => answerList.concat(value * value), []) // Here we can reproduce logic of map operator
const answer_af12 = []

const af13 = referenceArray.reduce((lastAnswer, value) => lastAnswer * value, 1) // This is going to do a factorial sequence
const answer_af13 = 0

const range = (startingNumber, endingNumber) => {
  const answer = new Array(endingNumber - startingNumber + 1)
  for(let i = 0; i < answer.length; i++) {
    answer[i] = i + startingNumber;
  }
  return answer;
}

const af14 = range(5, 10) // [5, 6, 7, 8, 9, 10]

const af15 = range(1, 100).reduce(sumAccumulator, 0)
const answer_af15 = 0

/*  
  Challenge Question
  ====================================

  Here are some hard problems
*/


/*
  Challenge 1. Given a max pushed in, find the sum of values of [0 ... max]
*/
const challenge1 = () => 0




/*
  Challenge 2. Given a length of n, create a fibonacci sequence of given size
  n = 1 => [1]
  n = 5 => [1, 1, 2, 3]
*/
const challenge2 = () => 0

/* Challenge 3:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
const challenge3 = 0;

/* Challenge 4

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
const challenge4 = 0

/* Challenge 5:
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
const challenge5 = 0

/* 
  Tests
  ====================================

  This is for proving that the values are equal to something, great for testing that future
  functions you right are correct, will use to verify that you made functions correctly.
*/

const isValidArray = (t, name, value, expected) => {
  const nthValue = Math.floor(Math.random() * expected.length);
  t.equal(value.length, expected.length, `${name} length`);
  t.notEqual(value, expected, '${name} no direct equal (ie cheating)');
  t.same(value[nthValue], expected[nthValue], `${name} (${nthValue})th`);
}

const expectedFib = (n) => {
  if (n <= 1) {
    return [1];
  }
  if (n <= 2) {
    return [1, 1];
  }
  return range(2, n - 1).reduce((x, y) => x.concat([(x[y-2] || 1) + (x[y - 1] || 1)]), [1, 1])
}
test('Tests', t => {
  isValidArray(t, 'answer_af3', answer_af3, [1, 3, 5, 7])
  isValidArray(t, 'answer_af4', answer_af4, referenceArray)
  isValidArray(t, 'answer_af5', answer_af5, [6, 7, 8])
  isValidArray(t, 'answer_af6', answer_af6, [1, 2, 3, 5, 6])
  isValidArray(t, 'answer_af7', answer_af7, [1, 4, 9, 16, 25, 36, 49, 64])
  isValidArray(t, 'answer_af8', answer_af8, [1, 3, 9, 19, 33, 51, 73, 99])
  isValidArray(t, 'answer_af9', answer_af9, [4, 16, 36, 64])
  t.equal(answer_af10, 36, 'answer_af10');
  isValidArray(t, 'answer_af11', answer_af11, [2, 4, 6, 8])
  isValidArray(t, 'answer_af12', answer_af12, [1, 4, 9, 16, 25, 36, 49, 64])

  t.equal(answer_af13, 40320, 'answer_af13')
  t.equal(answer_af15, 4950, 'answer_af13')


  testFunction(t, challenge1, 'challenge1', x => ((x) * (x - 1)) / 2,range(3, 100000).map(x => [x]))
  testFunction(t, challenge2, 'challenge2', expectedFib, range(4, 10000).map(x => [x]))
  t.equal(challenge3, 233168, 'challenge3');
  t.equal(challenge4, 4613732, 'challenge4');
  t.equal(challenge5, 25164150, 'challenge5');

});

const testFunction = (t, answer, name, expected, input) => {
  t.same(answer(...input[0]), expected(...input[0]), `${name}(${input[0].join(', ')})`);
  const firstIndex = Math.floor(Math.random() * (input.length - 1)) + 1
  t.same(answer(...input[firstIndex]), expected(...input[firstIndex]), `${name}(${input[firstIndex].join(', ')})`);
  const secondIndex = Math.floor(Math.random() * (input.length - 1)) + 1
  t.same(answer(...input[secondIndex]), expected(...input[secondIndex]), `${name}(${input[secondIndex].join(', ')})`);
}
