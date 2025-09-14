const personalInfo :{
firstName: string;
lastName: string;
fullName?: string;
} = {
  firstName : "Virat",
  lastName : "Kohli",
}
personalInfo.fullName = personalInfo.firstName + " " + personalInfo.lastName

console.log(personalInfo)

//delete property fullName using delete operator
delete(personalInfo.fullName);
console.log(personalInfo)

//use Object.keys() property to count number of properties
const length = Object.keys(personalInfo).length;
console.log('Total properties in personalInfo - ', length)

//Write a function use Object.values to sum all numeric values
const results: { name: string; grade: number; }[] = [
  { name: "Rohit", grade: 58 },
  { name: "Richard", grade: 92 },
  { name: "Kohli", grade: 41 },
  { name: "Sachin", grade: 86 },
];

function sumGrades1(results: { name: string; grade: number; }[]) {
    return results.reduce((acc, item)=>item.grade + acc , 0)
}
function sumGrades2(results: { name: string; grade: number; }[]) {
   const grades =  Object.values(results).map((student)=>student.grade);
   return grades.reduce((sum, grade) => sum + grade, 0);

}

console.log("Total sum of grades:", sumGrades1(results));
console.log("Total sum of grades:", sumGrades2(results));


//Create a function using Object.entries that converts object into array of key value pair
type personProps = {
name: string;
age: number;
}
const person: personProps = {
  name: "Virat",
  age: 36,
};

function objectToEntries(object: Record<string, any>):[string, number][] {
    return Object.entries(object);
}

console.log(objectToEntries(person))

//Implement function to merge 2 objects using Object.assign()
//Object.assign copies the common properties from both objects and take them as one
const obj1 = {
  firstName: "Rohit",
  age: 36
}
const obj2 = {
  name: "Kumar",
  age: 36
}

const newObject = Object.assign({},obj1, obj2);
console.log(newObject)

console.log("Has the obj1 has name - ", obj1.hasOwnProperty("age"))

