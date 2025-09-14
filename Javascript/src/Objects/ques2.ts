//Create a function to clone an obejct using JSON.parse() and JSON.stringify()
const obj1 :{
  firstName: string;
  lastName: string;
  age: number;
  fullName?: string;
} = {
  firstName: "Rohit",
  lastName: "Sharma",
  age: 37,
}

obj1.fullName = obj1.firstName + " " + obj1.lastName;
console.log(obj1)

function cloneObject1(obj:Record<string, any>) {
  return JSON.stringify(obj)
}
function cloneObject2(obj:string) {
  return JSON.parse(obj)
}
console.log('Object after stringify - ', cloneObject1(obj1))
const stringifiedObject: string = cloneObject1(obj1); 
console.log('Object after parse - ', cloneObject2(stringifiedObject))

//Implement a function that use Object.freeze() to make the object immutable
type fruitProps = {
  name: string;
  color: string;
}

const fruitArray: fruitProps[] =[
  {
     name:'Apple',
     color: 'red',
  },
  {
     name:'guava',
     color: 'green',
  },
  {
     name:'banana',
     color: 'yellow',
  },
]

Object.freeze(fruitArray);
console.log(fruitArray);
// fruitArray.push({
//      name:'banana',
//      color: 'yellow',
//   },)
console.log(fruitArray)