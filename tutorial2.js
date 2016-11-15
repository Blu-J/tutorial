/* 
  Function Declarations
  ====================================

  Now we need to be able to do a little more, so we are going to include the functions.
  Functions allow us to dynamically figure out the values given inputs.
  The form we are going to use is `const {functionName} = ({params}) => {expression}`

*/
const f1 = () => `some value`; // A function that has no params
const c1 = f1() // Here we call the function

const f2 = (singleVariable) => `I have recieved a variable of ${singleVariable}`; // Here get in a single param
const c2_1 = f2(`here is a string`) // Note that this will output: I have recieved a variable of here is a string 
const c2_2 = f2() // Note that this will output: I have recieved a variable of undefined

const f3 = (x, y) => x + y // Here we are using several params
const c3 = f3(2, 3) // 5

const f4 = (x = 'nothing in') => `I have recieved (${x})` // Here we have a default value
const c4_1 = f4('a') // I have recieved (a)
const c4_2 = f4() // I have recieved (nothing in)
const c4_3 = f4(false) // I have recieved (false)

const f5 = (x) => (y) => x + y // Here we have a function that returns a function
const c5_1 = f5(1)(2) // 3
const c5_2 = f5(6)(3) // 9
const c5_add3 = f5(3) // A function that returns 3 + a number, so basically returns (x) => 3 + x
const c5_3 = c5_add3(5) // 8

const f6 = x => x + 3
const c6 = f6(9) // 12


// Here we are going to use a ternary conditional which has the form of {condition} ? {expressionIfConditionTrue} : {expressionIfConditionFalse}
const f7 = (x) =>  // Conditional
  x > 5 ? 'greater than 5' :
  'less than 5'

const c7_1 = (f7(5)) //'less than 5'
const c7_2 = (f7(5.1)) //'greater than 5'

const f8 = (x) => // Here we are going to have three conditions, notice it falls through
  x % 3 === 0 ? 'This number is divisible by 3' :
  x % 3 === 1 ? `This number is divisible by 3 when we subtract 1` :
  `This number is divisible by 3 when we subtract 2`;
const c8_1 = (f8(6)) // 'This number is divisible by 3'
const c8_2 = (f8(7)) // 'This number is divisible by 3 when we subtract 1'
const c8_3 = (f8(8)) // 'This number is divisible by 3 when we subtract 2'
const c8_4 = f8(11) // 'This number is divisible by 3 when we subtract 2'

const factorial = (value) => // Functions can be recursive all call themselves
  value > 1 ? (value) * factorial(value - 1) :
  1

// Note that there is a limit to how big value can be before javascript explodes >= 2500

const factorial2 = (value, answer = 1) => // Tail recursion, some languages can optimize this, javascript can't yet
  value > 1 ? factorial2(value - 1, answer) :
  answer

const isEqual = (a, b) => a === b // Note that equal is 3 =
const greaterThan = (a, b) => a > b
const greaterThanOrEqual = (a, b) => a >= b // Note the equal after the >
const notEqual = (a, b) => a !== b // Note the double equal

/**
 * Alternative forms
 * ------------------
 * 
 * Here we will see alternative forms that other people may use, please don't use them
 * 
 * 
 */

function of1(param1, param2) {
  return param1 + param2; // Value has to be returned
}

const of2 = (param1) => { //Here we can put the value in a block
  const value = 5;  // And this const only exists in this function
  return param1 + value; // And this is the value that is returned
}

/**
 * Practice
 * ------------------
 */

const quadraticEquationPositive = null // Positive case of the quadratic equation
// Math.sqrt is the sqrt function

/* 
  Tests
  ====================================

  This is for proving that the values are equal to something, great for testing that future
  functions you right are correct, will use to verify that you made functions correctly.
*/

test('Quadratic Equation', t => (
  t.equal(typeof quadraticEquationPositive, 'function', 'quadraticEquationPositive isn\'t a function'),
  t.equal(quadraticEquationPositive(1, 2, 3), 1, 'quadraticEquationPositive(1, 2, 3)'),
  t.equal(quadraticEquationPositive(0, 2, 4), 2, 'quadraticEquationPositive(0, 2, 4), did you deal with dividing by 0'),
  t.equal(quadraticEquationPositive(0, 0, 4), 'No answer', 'quadraticEquationPositive(0, 0, 3), did you deal with dividing by 0')
));