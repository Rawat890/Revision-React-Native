//Write a function to find a strudent in an array with grade greater than 70
type Student = {
  name: string;
  grade: number;
};

const result: Student[] = [
  { name: "Yash", grade: 56 },
  { name: "Rohit", grade: 58 },
  { name: "Richard", grade: 92 },
  { name: "Kohli", grade: 41 },
  { name: "Sachin", grade: 86 },
  { name: "Philip", grade: 76 },
];

function findGradeGreaterThan70(result:Student[]): Student | undefined {
  return result.find((item) => item.grade > 70);
}

console.log('The Highest grade is - ', findGradeGreaterThan70(result));

//Use some method to check if there is any number negative
const numbers: number[]= [12,-3,-8,8,19,4,-18];
function checkNegative(numbers:number[]): boolean {
  return numbers.some((item)=>item<0)
}
console.log('The negative is - ', checkNegative(numbers))

//Create a function to check if every password in array is atleast 8 characters
const passwords: string[] = [
  "abc123",
  "pass",
  "superSecure123!",
  "xyz",
  "letmein",         
  "admin2021",       
  "A1!",             
  "qwertyuiopasdfgh"
];

function is8CharactersInPassword(passwords:string[]):boolean {
  return passwords.every((item)=>item.length > 8)
}

console.log('Is every passord is 8 characters or greater - ', is8CharactersInPassword(passwords))

function sortNumbersDescending(numbers:number[]): number[] {
  return numbers.sort((a,b)=>b-a)
}

console.log(sortNumbersDescending(numbers))