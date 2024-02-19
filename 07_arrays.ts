// Array -> Ordered list of data

let arr: number[] = [1, 2, 5, 4, 3];

console.log(typeof arr, arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[-2]);
console.log(arr[6]);

console.log(arr.length);


// printing the array using for loop
for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);   
}

// changing value of first element
arr[0] = 100;
console.log(arr);
console.log();


let names: string[] = ["Bharat", "Deepak", "Raju", "Dablu"];
console.log(names);
console.log(names.length);


// printing the array using for loop
for (let i: number = 0; i < names.length; i++) {
    console.log(names[i]);   
}

console.log();


