
let friends: string[] = ["Nand", "Satyam", "Gautam", "Raushan"];
console.log(friends);

// length -> return the length of the array
console.log(friends.length);

// push() -> Insert at last
let newLength: number = friends.push("Raju");
console.log(newLength);
console.log(friends);
console.log(friends.length);

// unshift() -> Insert at first
friends.unshift("Mohan");
console.log(friends);
console.log(friends.length);

// pop() -> Delete from last
friends.pop();
console.log(friends);
console.log(friends.length);

// shift() -> Delete from start
friends.shift();
console.log(friends);
console.log(friends.length);

// join()
console.log(friends.join(","));
console.log(friends.join("----"));

// reverse()
friends.reverse();
console.log(friends);


// forEach()
friends.forEach((value) => {
    console.log(value);    
});

// map()
let newFriends: string[] = friends.map((value) => {
    return value.toUpperCase();    
});
console.log(newFriends);

// filter()
let bestFriend: string[] = friends.filter((value) => {
    return value.length > 6;    
});
console.log(bestFriend);

// reduce()
let allFriends: string = friends.reduce((curr, next) => {
    return curr + ' ' + next;    
});
console.log(allFriends);


let mixedArr: (string | number | boolean)[] = ["Bharat", 56, true, "Raj", 345];
console.log(mixedArr);

mixedArr.forEach((value) => {
    console.log(value);    
});

mixedArr.forEach((value) => {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }    
    else if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } 
    else {
        console.log(value);
        
    }
});