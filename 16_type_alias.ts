// Type Alias -> Creating temprory name of type

type xyz = string;
let address: xyz = "Mumbai";

console.log(typeof address);
console.log(address);
console.log();


// to store alphanumeric value
type alphaNum = string | number;

let userPass: alphaNum = 213489;
console.log(typeof userPass, userPass);

userPass = "Raj@123";
console.log(typeof userPass, userPass);
console.log();


// object type aliasing
type Order = {
    title: string,
    price: number,
    status: string
};

let order1: Order = {
    title: "This is title of order",
    price: 42389,
    status: "This is status"
};

console.log(typeof order1);
console.log(order1);
