//Write a function to create a promise that resolves after 2 seconds with message "Hello"
function greetHello() {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Hello")
    }, 2000)
  })
}

//Write a function to create a promise that rejects after 2 seconds with message
function throwError() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error("Something went wrong"))
    }, 5000)
  })
}

//Write a function to create a promise that returns userData
function getUserData(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        } else {
          response.json()
            .then(resolve)
            .catch((jsonError) => {
              reject(new Error(`Failed to parse JSON: ${jsonError.message}`));
            });
        }
      })
      .catch((fetchError) => {
        reject(new Error(`Network error: ${fetchError.message}`));
      });
  });
}

//Write a function to hide loading spinner regardless of success or failure
let isLoadingSpinner = false;

function hideSpinner(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    isLoadingSpinner = true;
    console.log("Loading spinner shows");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        isLoadingSpinner = false;
        console.log("Loading spinner hides");
      });
  });
}

const data = hideSpinner('https://jsonplaceholder.typicode.com/users/1')
  .then((data) => console.log("Data:", data))
  .catch((error) => console.log("Error:", error.message));

//Write a function with multiple then calls to process the user data step by step
function getUserDataInSteps(url:string): Promise<any> {
  return new Promise((resolve, reject)=>{
    fetch(url).then((response)=>{
      if (!response.ok) {
        throw new Error(`Something went wrong - ${response.statusText}`);
      }
      console.log('Inside the error')
      return response;
    }).then((response)=>{
      console.log("Inside the data section")
      return response.json();
    }).then((data)=>{
      console.log("Resolving data")
      resolve(data)
    })
  })
}

getUserDataInSteps('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log("Data:", data))
  .catch((error) => console.log("Error:", error.message));