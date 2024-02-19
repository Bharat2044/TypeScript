// tuple -> number of elements are fixed and type of elements are known and same

let skill: [string, number, string] = ["C++", 400, "Java"];

console.log(skill);
console.log(skill[0]);
console.log(skill[1]);
console.log(skill[2]);


// (rgba) color
let color1: [number, number, number, number] = [255, 255, 123, 0.8];
console.log("Current color is: ", color1);

// let color2: [number, number, number, number] = [255, 255, 123]; // error TS2322: Type '[number, number, number]' is not assignable to type '[number, number, number, number]'. Source has 3 element(s) but target requires 4.

// ? means optional
let color3: [number, number, number, number?] = [255, 255, 0];
console.log("Current color is: ", color3);