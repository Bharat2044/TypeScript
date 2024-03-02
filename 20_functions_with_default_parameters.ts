function sumOfFourNumbers(a: number = 3, b: number, c: number = 5, d: number = 1): number {
    return a + b + c + d;
}

console.log(sumOfFourNumbers(1, 2));
console.log(sumOfFourNumbers(1, 2, 3));
console.log(sumOfFourNumbers(1, 2, 3, 4));
console.log(sumOfFourNumbers(undefined, 2));
