//Writye a function using split() method to convert the comma-separated string in array
const commanSeparatedString = "121,Apple,Orange,Virat,Kohli";
console.log(commanSeparatedString)

function stringToArray(commanSeparatedString:string) {
  return commanSeparatedString.split(',');
}

const array1 = stringToArray(commanSeparatedString)
console.log(array1)

//Writye a function using join() method to combine array elements to single string with custom separator
function arrayToString(array: string[], separator: string = ','): string {
  return array.join(separator);
}

console.log(arrayToString(array1, ' | ')); 

const str1 = "Implement the function, Implement the other.  ";
console.log(str1.substring(0,11))
console.log(str1.charAt(11))
console.log(str1.indexOf("t"))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.trim())
console.log(str1.startsWith("Implement "))
console.log(str1.endsWith("Implement "))