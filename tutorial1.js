/* 
  Welcome to programming in javascript, this is a comment.
  The point of the comments is to convey ideas to the reader, and not to the machine.
  This is going to be how we are going to explain our ideas and such.
  Comments can also be in the form of `// {Everything else on the line}`, but this is per line.
*/


/* 
  Variable declartions
  ====================================

  So the first thing we are going to go over is assignement variables. We can use
  variables to store values, like strings and numbers and functions.
*/

const firstVariable = 'someStringValue' // So a variable takes the pattern of `const {name} = {expression}`.

const secondVariable = 3 // Here we can set a variable to a number

const thirdVariable       =      //Notice that newlines and spaces don't matter that much
  4.4 // Here is a float, which is a number that is not an integer

const fourthVariable = "Another string"; // Yes, javascript does support semicolon, which says that this is the end



const fifthVariable = thirdVariable + secondVariable // Note that the fifth variable is going to be set to 7.4

const sixthVariabe = thirdVariable + secondVariable // Note that the fifth variable is going to be set to 7.4

const eightVariable = undefined; // Undefined and null are special for nothings.

const c1 =
`
  This is a multi line string
`;  

const c2 = `This is a string with a variable of secondVariable = ${secondVariable} consumed from javascript.` // Bringing a variable into a string
  
// Note the `${}`, everything in the {} is an expression

const c3 = `This is a string with a more complex expression = ${ 5 + 3 }`  // Note we can even do operations in here

const c4 = [] // Here is a list/ array, which can be 0 - inf number of items, this one is empty
const c5 = c4.length // 0, A empty list has a length of 0

const c6 = [1, 2, 'three'] // Here we have a filled list
const c7 = c6[0] // 1, this is how we get values out of a list, by an index number
const c8 = c6.length //3  
const c9 = c6[2] // 'three'
const c10 = c6[3] // undefined, Note that when we ask for a value that doesn't exist, we get that special nothing value

const c11 = c6.concat(['a', 'b']) // [1, 2, 'three', 'a', 'b']: This is how we add to a list
const c12 = ['a', 'b'].concat(c6) // ['a', 'b', 1, 2, 'three']

const c13 = [c6, ['someValue'], 'okay, another value'] // [ [1, 2, 'three'], [ 'someValue' ], 'okay, another value' ] Our lists can have other lists, or functions, or anything
const c14 = c13[0][2] // 'three'
const c15 = c13[0] // [1, 2, 'three']



/**
 * Places to screw up:
 *  Incorrect form
 * 
 * 
 *  Also Having an operator like
 *    
 *    const value = 4
 *      + 5
 *   
 * because javascript doesn't know about the second line, but this should create an error.
 */

/**
 * Alternative forms
 * ------------------
 * 
 * Here we will see alternative forms that other people may use, please don't use them
 * 
 * 
 */

var var1 = 3 // Note that we can call a variable with the keyword of var instead
let var2 = 5 // Note that we can call a variable with the keyword of let instead

var3 = 4 // Technically we can even not use a keyword, and this is global ownership
// Some browsers will die with this, and the is a really bad pattern

/**
 * Practice
 * ------------------
 * 
 *  So far we have learned how to create variables, now we are going to create a few.
 * 
 * The goal is to make all the tests pass.
 */

const myFirstVariable = '';
const mySecondVariable = '';
// Create a variable myFirstVariable and set it to 5
// Create another variable called `mySecondVariable` and use myFirstVariable and have it equal "myFirstVariable = 5"


/* 
  Tests
  ====================================

  This is for proving that the values are equal to something, great for testing that future
  functions you right are correct, will use to verify that you made functions correctly.
*/

test('Variable decration', t => (
  t.equal(myFirstVariable, 5, `myFirstVariable is not set to the correct value`),
  t.equal(mySecondVariable, `myFirstVariable = 5`, `mySecondVariable is not set to the correct value`)
));