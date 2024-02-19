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
