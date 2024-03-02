// Function to print values of type 'number' using rest parameters
function printNumberTypeValue(...n: number[]): void {
    console.log(n);  // Print the entire array of numbers
    
    for (let i = 0; i < n.length; i++) {
        console.log(n[i]);  // Print each individual number in the array
    }
}

// Calling the function with different numbers
printNumberTypeValue(1, 2);
printNumberTypeValue(1, 2, 3, 4);


// Function to print values of type 'any' using rest parameters
function printAnyTypeValue(...n: any[]): void {
    console.log(n);  // Print the entire array of values with 'any' type
}

// Calling the function with different types of values
printAnyTypeValue(1, "Ram", true);
printAnyTypeValue(1, "Deepak", false, 2, 3.8, "Rani");


// Function to print a specific value followed by values of type 'any' using rest parameters
function printValue(a: string, ...n: any[]): void {
    console.log(a);  // Print the first parameter of type 'string'
    console.log(n);  // Print the entire array of values with 'any' type
}

// Calling the function with a string and different types of values
printValue("Ram", 2, 4, true);
printValue("Deepak", false, 2, 3.8, "Rani");



function sumOfNumbers(a: number, b: number, ...rest: number[]): number {
    console.log(a, b, rest);
    
    let sum: number = a + b;
    
    rest.forEach((val) => {
        sum += val;
    });

    return sum;
}

console.log("Sum = " + sumOfNumbers(1, 2));
console.log("Sum = " + sumOfNumbers(1, 2, 3));
console.log("Sum = " + sumOfNumbers(1, 2, 3, 4));
console.log("Sum = " + sumOfNumbers(1, 2, 3, 4, 5, 6));

