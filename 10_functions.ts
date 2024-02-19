function greet(): void {
    console.log("Hello");
}

greet();


function product(a: number, b: number): void {
    console.log(a * b);    
}

product(2, 5);


function fun(rs: number, name: string): string {
    return `${name} + ${rs}`;     
}

console.log(fun(10, "Raj"));
console.log(fun(20, "Bharat"));

