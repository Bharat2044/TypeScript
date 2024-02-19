// Here, c is optional paramter
function sumOfThree(a: number, b: number, c?: number): number {
    console.log("Adding three numbers");

    if(c !== undefined) {
        return a + b + c;
    }

    return a + b;
}

console.log(sumOfThree(1, 2));
console.log(sumOfThree(1, 2, 3));
