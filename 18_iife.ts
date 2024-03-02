// Immediately Invoked Function Expression (IIFE) with a void return type
(function (): void {
    // Declare and initialize a string variable
    let message: string = "Hello from IIFE!";
    
    console.log(message);
})();



// IIFE with parameters and a void return type
(function (a: number, b: number): void {
    console.log(a + b);
})(2, 3);



// IIFE assigned to a variable with a string return type
let greet = (function(): string {
    return "Hello";
})();

// Log the result of the IIFE with a string return type
console.log(greet);



// IIFE with parameters and a number return type
let product = (function(a: number, b: number): number {
    return a * b;
})(2, 3);

// Log the result of the IIFE with a number return type
console.log(product);
