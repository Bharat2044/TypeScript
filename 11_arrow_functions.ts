// Arrow function without parameters and with void return type
let hello = (): void => {
    console.log("Hello");
}

// Call the hello function
hello();



// Arrow function with parameters and void return type
let add = (a: number, b: number): void => {
    console.log(a + b);
}

// Call the add function with arguments
add(2, 5);



// Arrow function with parameters and string return type
let fn = (rs: number, name: string): string => {
    // Return a string with the formatted name and value
    return `${name} + ${rs}`;
}

// Call the fn function with different arguments and log the results
console.log(fn(10, "Raj"));
console.log(fn(20, "Bharat"));



// Regular arrow function with void return type
const addNum = (a: number, b: number): void => {
    // Log the sum of two numbers
    console.log(a + b);
}

// Log the type of the addNum function and call it with arguments
console.log(typeof addNum);
addNum(10, 20);



// Arrow function with explicit string return type
const addString = (a: string, b: string): string => {
    // Return the concatenated string
    return a + b;
}

// Call addString, store the result, and log the result
let ans: string = addString("Hello ", "Everyone!!!");
console.log(ans);



// Arrow function with optional parameter
const optionalParametersFun = (a: number, b?: number): void => {
    // Log the value of 'a' and 'b'
    console.log(a);
    console.log(b);
}

// Call optionalParametersFun with and without the second argument
optionalParametersFun(1);
optionalParametersFun(1, 2);



// Arrow function with default parameter
const defaultParametersFun = (a: number, b: number, c: number = 10): number => {
    // Return the sum of 'a', 'b', and 'c'
    return a + b + c;
}

// Log the result of defaultParametersFun with and without the third argument
console.log(defaultParametersFun(1, 2));
console.log(defaultParametersFun(1, 2, 3));



// Arrow functions with concise syntax
let printMessage = (): void => console.log("Hello from printMessage()");
printMessage();

let returnMessage = (): string => "Hello from returnMessage()";
console.log(returnMessage());

let sum = (a: number, b: number): void => console.log(a + b);
sum(2, 3);

let product = (a: number, b: number): number => a * b;
console.log(product(2, 4));
