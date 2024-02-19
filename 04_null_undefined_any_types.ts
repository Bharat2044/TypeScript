// null -> absence of a value
let userLastName: null = null;
console.log(typeof userLastName, userLastName);

if(userLastName) {
    console.log("Correct Username");    
} else {
    console.log("Incorrect Username");    
}


// undefined -> default value of unitialized variable
let userPassword: undefined;
// let userPassword: undefined = undefined;
console.log(typeof userPassword, userPassword);

if(userPassword) {
    console.log("Correct Password");    
} else {
    console.log("Incorrect Password");    
}


// any -> skip the type checking
let x: any = "This is data.";
console.log(typeof x, x);

x = 10;
console.log(typeof x, x);


let networkData: any = {
    productName: 'Samsung TV',
    price: 321245,
    discountedPrice: 2345
};

console.log(typeof networkData, networkData);

console.log(networkData.productName);
console.log(networkData.price);

console.log(networkData.isActive);
