/*Write an arrow function and function expression
function expression - anonymous function assigned to a varibale , can be ued with this, arguments and super normally.

arrow function - 
Shorter syntax.
Does not bind its own this, arguments, or super.
Useful for callbacks and concise code.
Cannot be used as a constructor (new). */

const greet = function (name:string) {
  console.log("Good Morning,", name);
}

const greet1 = (name: string): string => `Hello, ${name}`;
greet('Rohit')
console.log(greet1('Kumar'));


const getArea = function (length:number, width: number) {
  console.log(`The Area of rectangle is - ${length*width}`)
}

getArea(12,15)

//Implement a higher order function that takes another function as parameter and executes it twice
function higherOrder(myFunction:()=>void) {
  myFunction()
  myFunction()
}

function greetHello() {
  console.log("Hello everyone")
}

higherOrder(greetHello)

//Write a closure function that maintains private counter var and return increment function
//A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing. This makes closures perfect for maintaining private state, like a counter.

function createCounter() {
  let counter = 0;
  return function increment() {
    counter++;
    return counter;
  }
}

const myCounter = createCounter();

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())

//Create a function with default parameters that greets user
function greetUser(userName:string = 'UserTesting', greet:string = 'O Haio') {
  console.log(`${greet}, ${userName}`)
}

greetUser();

//Implement a function using rest parameters to calculate sum of unlimited numbers
function sumUnlimited(...numbers:number[]): number {
  return numbers.reduce((acc, item)=>item+acc, 0)
}

console.log(sumUnlimited(1,2,3,4,12,53,3))

//recursive function to calculate factorial
function factorial(no:number):number {
  if (no<=1) {
    return 1;
  }
  return no * factorial(no-1)
}

console.log(factorial(6))

//Implement a callback function that  processes array elements and executes provided function each
const numArray = [1,2,3,4,5];
function multiplyBy2(number:number):number {
  return number * 2;
}

function performOperationOnArray(
  arr: number[],
  callback: (value: number) => number
): void {
  const result = arr.map(callback);
  console.log(result);
}


performOperationOnArray(numArray,
  multiplyBy2)