//Write a function to create a promise that resolves after 2 seconds with message "Hello"
function greetHello() {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Hello")
    }, 2000)
  })
}

greetHello().then((data)=>console.log(data)).catch((error)=>console.log(error))

//Write a function to create a promise that rejects after 2 seconds with message
function throwError() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error("Something went wrong"))
    }, 5000)
  })
}

throwError().catch((error)=>console.log(error))

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


getUserData('https://jsonplaceholder.typicode.com/users/1').then((data)=>console.log(data))

