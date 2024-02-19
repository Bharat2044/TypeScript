let emp: "Raj";

emp = "Raj"
console.log(typeof emp, emp);

// emp = "Mohan"; // error TS2322: Type '"Mohan"' is not assignable to type '"Raj"'.

console.log();


let animals: "Dog" | "Cat" | "Cow";

animals = "Dog";
console.log(typeof animals, animals);

animals = "Cat";
console.log(typeof animals, animals);

animals = "Cow";
console.log(typeof animals, animals);
