//Write a function to find sum of 10 numbers

const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

function sumUsingForEach(array:number[]): number {
  let sum = 0;
  array.forEach(element => {
    sum =sum + element;
  });

  return sum;
}

const sum1 : number = sumUsingForEach(numbers) ;
console.log('The sum using 1st method is - ', sum1);
console.log("Original array is - ", numbers);

function sumUsingForOf(array:number[]): number {
  let sum = 0;
  for (const element of array) {
    sum = sum + element;
  }
  return sum;
}

const sum2 : number = sumUsingForOf(numbers) ;
console.log('The sum using 2nd method is - ', sum2);
console.log("Original array is - ", numbers);


function sumUsingReduce(array:number[]): number {
  let sum = array.reduce((acc, item) => 
    acc + item, 0);
    return sum;
}

const sum3 : number = sumUsingReduce(numbers) ;
console.log('The sum using 3rd method is - ', sum3);
console.log("Original array is - ", numbers);


function sumUsingMap(array:number[]): number {
  let sum = 0;
  array.map((item)=>{
    sum = sum + item;
  })
  return sum;
}

const sum4 : number = sumUsingReduce(numbers) ;
console.log('The sum using 4th method is - ', sum4);
console.log("Original array is - ", numbers);


//Create a function that filters an array of ages to return only adults using filter
const ages : number[] = [12,15,31,56,3,55,37,17,18,90,1];
function adultsAges(ages:number[]): number[] {
  let adults;
  adults = ages.filter((item)=>item >=18)
  return adults;
}


const adults = adultsAges(ages);
console.log("Adult ages (18+):", adults);
console.log("Original ages- ", ages)

//Write a function using the map method to convert array of temperature to Farhenheit
const temperature:number[] = [32.0, 50.0, 75.2, 45.1,65.3]

function conversionFToCelsius(temperature:number[]):number[] {
    return temperature.map(item => (item - 32) * (5 / 9));
}

console.log('Conversion is - ', conversionFToCelsius(temperature))

//Implement a function that calculates the amximum number in array using reduce
const maxNumbers = [10,43,4,18,19,90,1000,44,377];
function findMaximum(maxNumbers:number[]):number {
  return maxNumbers.reduce((acc, item)=>item > acc ? item : acc)
}

console.log('Max number is - ', findMaximum(maxNumbers))

//Create a function using forEach method to print each element of an array and index
function printNumbers(numbers:number[]) {
  numbers.forEach((element, index) => {
    console.log(`The element at ${index} - ${element}`)
  });
}

printNumbers(numbers)