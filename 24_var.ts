/**
 * Function demonstrating variable declarations with 'var'
 */
function test(): void {
    // console.log(x);  // Hoisting issue: x is undefined at this point

    // Declare and initialize x using 'var'
    var x: number = 10;
    console.log(x);
    
    // Declare and initialize y using 'var'
    var y: number = 20;
    console.log(y);

    // Reassign y
    y = 30;    
    console.log(y);
}

// Uncommenting the lines below would result in compilation errors
// console.log(x);  // error TS2304: Cannot find name 'x'.
// console.log(y);  // error TS2304: Cannot find name 'y'.
test();



// Block-scoped variable 'b' with 'var'
{
    var b: number = 5;
    console.log(b);
}
console.log(b);  // Variable 'b' is accessible outside the block scope



// Variable 'c' with 'var' is hoisted
console.log(c);  // Output: undefined

var c: number = 23; 
console.log(c);  // Output: 23
