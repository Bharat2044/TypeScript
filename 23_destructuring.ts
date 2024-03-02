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
 * Destructuring in an object
 */

// Destructuring an object with individual variables
const person: { name: string, age: number, address: { city: string, state: string } } = {
    name: "Bharat",
    age: 21,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

// Using an alias for the 'name' property during destructuring
const { name: personName, age, address: { city, state } }: { name: string, age: number, address: { city: string, state: string } } = person;

console.log(personName);
console.log(age);
console.log(city);
