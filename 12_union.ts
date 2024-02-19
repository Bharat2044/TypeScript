let userId: (string | number) = "Bharat2044";

function displayUserId(userId: (string | number)): (string | number) {
    console.log("User Id = " + userId);

    if(typeof userId === 'string') {
        return userId.toUpperCase(); 
    } else {
        return userId.toFixed(2); 
    }       
}

console.log(displayUserId(userId));

userId = 2343553;
console.log(displayUserId(userId));



let myArray: (string | number | boolean)[] = ["Bharat", 123, true, "Deepak", 67.98];
console.log(myArray);
