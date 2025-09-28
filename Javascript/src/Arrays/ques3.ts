//Solution 1. Using reduce
let nums:number[] = [1,1,,132,22,3,4,4,56];
const sum1 =  nums.reduce((acc, current)=>(acc+current),0);
console.log('sum 1 is - ', sum1);

//Solution 2. Using for of
let sum2=0;
for (const element of nums) {
  sum2 = sum2 + element
}
console.log('sum 2 is - ', sum2);

//Write a code to find largest number in array
//Solution 1. Brute force
if (nums.length === 0) {
  throw new Error("Array is empty");
}

let largest = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}

console.log('Largest number is:', largest);

const fruit = ["Apple", "banana"];
//Array operations
//1. adding a new fruit
const addAtLast = fruit.push('guava')
console.log(fruit)

const addAtFirst = fruit.unshift('papaya')
console.log(fruit)

const deleteAtFirst = fruit.pop()
console.log(fruit)

const deleteAtLast = fruit.shift()
console.log(fruit)

const isApple = fruit.includes('Apple');
console.log('isPapaya - ', isApple)

function reverseArray(nums: number[]): number[] {
  let i=0;
  let j = nums.length-1
  while (i<=j) {
    let temp = nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
    i++;
    j--;
  }
  return nums;
}

console.log('Reversed array - ', reverseArray(nums))

//Merge 2 arrays into one
const array1 = [1,5,2,'a',12];
const array2 = [11,5,21,'a',12];
const mergedArray = [...array1,...array2];
console.log(mergedArray)

const copyArray = [...array1, 100];
console.log(copyArray);
console.log(array1)

const str = 'cats and dogs are here, cats and dogs are there';
const replaced = str.replaceAll('cats', 'dogs');
console.log(replaced)

const extracted3Elements = array1.slice(1,4);
console.log(extracted3Elements)

const splicedArray = array2.splice(1,2,3);
console.log(splicedArray)
console.log(array2)

//Split the string 'Javascript is awesome' to array of words;
const str2 = 'Javascript is awesome';
const words = str2.split(' ');
console.log(words)

const names: string[] = ['Rohit','Kumar', 'Ashok'];
const sortedNames = names.sort();
console.log(sortedNames);

const tenNumbers = [1,2,4,5,6,78,9,10,23];
const evenNumbers = tenNumbers.filter((num)=>num%2===0);
console.log(evenNumbers)
const getSquares = evenNumbers.map((num)=>num*num);
console.log(getSquares);

const getProduct = evenNumbers.reduce((acc, current)=>(acc*current),1);
console.log(getProduct)


const arr1 = [1,2,3];
const arr2 = [4,5,6];
function Matrix2d(arr1:number[], arr2:number[]):number[][]{
  const result: number[][] = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i]=[];
    for (let j = 0; j < arr2.length; j++) {
      result[i][j] = arr1[i] * arr2[j];
    }
  }
  return result;
}

const array2D = Matrix2d(arr1, arr2);
const updatedValue =100;
array2D[0][2] =updatedValue;
console.log(array2D)

//flatten array
const arrayFlattened = array2D.flat();
console.log(arrayFlattened)
console.log(array2D)

//Remove duplicates
const arr3 =[1,2,2,3,4,4,5,6,7,7]
function removeDuplicates1(nums:number[]) {
  const unique = nums.filter((val,index)=> nums.indexOf(val)===index)
  return unique.filter((val)=>val!==undefined);
}
console.log(removeDuplicates1(arr3))

function removeDuplicates2(nums:number[]) {
  const unique = [...new Set(nums)]
  return unique;
}
console.log(removeDuplicates2(arr3))

const uniqueArr = arr3.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

console.log(uniqueArr)

//Find sum of all elements of 2d array
let Matrix2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum2D: number = 0;

for (let i = 0; i < Matrix2.length; i++) {
  for (let j = 0; j < Matrix2.length; j++) {
     sum2D += Matrix2[i][j];
  }
}

console.log(sum2D)
