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

validateUserInput("a").then((data)=>console.log(data)).catch((err)=>console.log(err))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
/*Write a function that wraps XMLHttp request in Promise for making http request
To properly wrap an XMLHttpRequest inside a Promise, you need to:

Open the request.
Attach event listeners for success (onload) and failure (onerror).
Send the request.
Resolve or reject the promise based on the response.*/

function xmlRequest(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } catch (err) {
          reject(new Error("Failed to parse JSON: " + err));
        }
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network error occurred"));
    };

    xhr.send();
  });
}

xmlRequest(url)
  .then(data => console.log("Response:", data))
  .catch(err => console.error("Error:", err));
