// string
let userName: string = "Bharat";    // Explicit annotate
let userEmail: string = 'abc@gmail.com';
let userDescription: string = `User is a programmer. Name is ${userName} and email is ${userEmail}`;
let password = "abc@123";   // Implicit annotate
// password = 12;  // Error: Type 'number' is not assignable to type 'string'

console.log(typeof userName, userName);
console.log(typeof userEmail, userEmail);
console.log(typeof userDescription, userDescription);
console.log(typeof password, password);

console.log(userName.toLowerCase());
console.log(userName.toUpperCase());


// number
let userAge: number = 21;
let userSalary: number = 1000034.523;

console.log(typeof userAge, userAge);
console.log(typeof userSalary, userSalary);


// boolean
let isActive: boolean = true;
let isMarried: boolean = false;

console.log(typeof isActive, isActive);
console.log(typeof isMarried, isMarried);