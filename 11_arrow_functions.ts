let hello = (): void => {
    console.log("Hello");
}

hello();



let add = (a: number, b: number): void => {
    console.log(a + b);    
}

add(2, 5);



let fn = (rs: number, name: string): string => {
    return `${name} + ${rs}`;     
}

console.log(fn(10, "Raj"));
console.log(fn(20, "Bharat"));

