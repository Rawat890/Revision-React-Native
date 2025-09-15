//Write. a function using promise constructor to validate use input asynchrously
function validateUserInput(input:any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input !== 'string') {
        reject(new Error("Input must be a string"));
      } else if (input.trim().length < 3) {
        reject(new Error("Input must be at least 3 characters long"));
      } else {
        resolve("Input is valid!");
      }
    }, 1000);
  });
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

/*Write a function that wraps XMLHttp request in Promise for making http request
To properly wrap an XMLHttpRequest inside a Promise, you need to:

Open the request.
Attach event listeners for success (onload) and failure (onerror).
Send the request.
Resolve or reject the promise based on the response.*/

//Write an async function to fetch user profile and await the response before processing

async function getUser(url:string) {
  try {
    const response = await fetch(url); //waits for the HTTP response,
    const profile = await response.json(); //reads and parses the body stream as JSON
    console.log("User Profile:", profile);

  } catch (error) {
    console.log(error)
  }
}
getUser(url)

