//Find the intersection od 2 arrays
const arr1 = [1, 7, 89, 2, 3, 5];
const arr2 = [4, 3, 5, 2, 6, 89];

function intersection(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1);
  const seen = new Set<number>();
  const result: number[] = [];

  for (const num of arr2) {
    if (set1.has(num) && !seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }

  return result;
}

console.log(intersection(arr1, arr2)); 

const intersection2 = arr1.filter(num => arr2.includes(num));
console.log(intersection2);

//Find elements that exists in first array but not in second
const existsInFirstOnly = arr1.filter(num => !arr2.includes(num));
console.log(existsInFirstOnly);

//Group array of objects by specific property
const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    isActive: true,
  },
];
