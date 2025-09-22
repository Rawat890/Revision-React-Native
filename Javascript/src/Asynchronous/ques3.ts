/*
QUES 1.  What is a promise ?
Promise is an object that represents the eventual completion or failure of an asynchronous operations and its resulting value. 
It can be in one of three stats=es -
pending, fulfilled and rejected.
Used to handle the asybchronous operation in js that are much cleaner and easier to manage than callbacks.
Promise.resolve(value) - returns a promise that is resolved with a given value.
Promise.reject(err) - returns a promise that is rejected with a given reason.
Promise.all(iterable) - returns a single promise that resolves when all of the promises in iterable argument have resolved or when no promise were passed.
It rejects with the reason of first promise that rejects.
Promise.any(iterable) - returns a single promise that ressolves when any of the promise is resolved and is rejected when all the promises are rejected.
Promise.allSettled(iterable) - returns a single promise that resolves when all promises have settled, either resolved or rejecetd. 
*/

//Create a function that returns a promise with delay of 2 seconds
function func1(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Inside the promise");
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

/*
QUES 2. Explain how promise chaining works and how it's useful ?
Promise chaining is a technique that allows you to chain multiple asynchronous operations together in a sequential manner. Each operation returns a promise, and the next operation in the chain waits for the previous one to complete before executing. This is useful because it helps to avoid callback hell, makes the code more easier to read and maintain. 
Here is a example -
func1(){
 return new promise((resolve, reject)=>{
 resolve(result);
}
}).then((result)=>{
return func2(result);
}).then((result2)=>{
return func3(result2);})
}).catch((err)=>{
console.log(err);
})

QUES 3. What's the difference between returning a promise in a .then() handler and returning a value directly ? 
When you return a promise in a .then() handler, the next .then() in the chain will wait for that promise to resolve before executing. This allows for chaining multiple async operations together. 
When you returns a value directly in a .then() handler, the next .then() will receive that value immediately without waiting. This is useful for transforming data or performing the synchronous operatrions.
*/

//Write a function to show difference
function func2(): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

//Returning a value directly
func2()
  .then((num) => {
    console.log("First then:", num);
    return num * 2; 
  })
  .then((result) => {
    console.log("Second then (value):", result); // Logs: 10
    return new Promise((resolve) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then((finalResult) => {
    console.log("Third then (after promise):", finalResult);
  });


/*
QUES 4. How to handle errors in promise chain ?
You can handle errros by adding .catch() method at the end of promise chain. it will catch any error that occurs in any of preceeding. 

QUES 5. What happens when error comes in middle of promise chain ?
When an error occurs, then the control is shift to the nearest catch block and the subsequent then blocks are skipped. 
*/

//Write. a function using promise constructor to validate use input asynchrously
function validateUserInput(input:any) {
  return new Promise((resolve, reject)=>{
    console.log("validating the user input")
    setTimeout(()=>{
      if(typeof input !== 'string'){
        reject(new Error("Input must be a string"));
      }
    }, 1000)
  })
}

validateUserInput(121).then((message)=>console.log(message)).catch((err)=>{
  console.log(err)
})