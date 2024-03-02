// Simple function without parameters and with void return type
function greet(): void {
    console.log("Hello");
}

// Call the greet function
greet();



// Function with parameters and void return type
function product(a: number, b: number): void {
    console.log(a * b);
}

// Call the product function with arguments
product(2, 5);



// Function with parameters and string return type
function fun(rs: number, name: string): string {
    // Return a string with the formatted name and value
    return `${name} + ${rs}`;
}

// Call the fun function with different arguments and log the results
console.log(fun(10, "Raj"));
console.log(fun(20, "Bharat"));



// Regular function with void return type
function addNum(a: number, b: number): void {
    // Log the sum of two numbers
    console.log(a + b);
}

// Log the type of the addNum function and call it with arguments
console.log(typeof addNum);
addNum(10, 20);



// Function with explicit string return type
function addString(a: string, b: string): string {
    // Return the concatenated string
    return a + b;
}

// Call addString, store the result, and log the result
let ans: string = addString("Hello ", "Everyone!!!");
console.log(ans);



// Function with optional parameter
function optionalParametersFun(a: number, b?: number): void {
    // Log the value of 'a' and 'b'
    console.log(a);
    console.log(b);
}

// Call optionalParametersFun with and without the second argument
optionalParametersFun(1);
optionalParametersFun(1, 2);



// Function with default parameter
function defaultParametersFun(a: number, b: number, c: number = 10): number {
    // Return the sum of 'a', 'b', and 'c'
    return a + b + c;
}

// Log the result of defaultParametersFun with and without the third argument
console.log(defaultParametersFun(1, 2));
console.log(defaultParametersFun(1, 2, 3));
