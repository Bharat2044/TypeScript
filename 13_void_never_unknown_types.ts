// void -> represent constant value that may be undefined or null
// void can be used when function does not have return statement
let a: void = undefined;
console.log(typeof a, a);

function sum(a: number, b: number): void {
    console.log(`Sum = ${a + b}`);
}

sum(10, 20);


// never -> represent value that will never occur, used when function never return value
// function myFun(message: string): never {
//     throw new Error(message);
// }

// const errorResult: never = myFun("This is an error!");
// console.log(errorResult);


// unknown -> not known and type safe counter part of any
function myFun2() {
    return "This is a Value";
}

let result1: unknown = myFun2();
console.log(result1);
// console.log(result1.toUpperCase()); //  error TS2339: Property 'toUpperCase' does not exist on type 'unknown'.

// assertion
let valueInString: string = result1 as string;
console.log(valueInString.toUpperCase());


let result2: any = myFun2();
console.log(result2);
console.log(result2.toUpperCase());