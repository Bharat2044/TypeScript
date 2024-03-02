/**
 * For Arrays
 */

// Create an array
let arr1: number[] = [1, 2, 3];

// Create a new array by spreading the elements of arr1
let arr2: number[] = [...arr1];

// Create a new array by spreading the elements of arr1 and adding additional elements
let arr3: number[] = [...arr1, 4, 5];

// Log the original and modified arrays
console.log(arr1);
console.log(arr2);
console.log(arr3);



/**
 * For Objects
 */
// Create an object
let obj1: { a: number, b: number } = { a: 1, b: 2 };

// Create a new object by spreading the properties of obj1
let obj2: { a: number, b: number } = { ...obj1 };

// Create a new object by spreading the properties of obj1 and adding an additional property
let obj3: { a: number, b: number, c: number } = { ...obj1, c: 3 };

// Log the original and modified objects
console.log(obj1);
console.log(obj2);
console.log(obj3);
