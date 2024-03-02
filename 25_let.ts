/**
 * Function demonstrating variable declarations with 'let'
 */
function test(): void {
    // console.log(x);  // error TS2448: Block-scoped variable 'x' used before its declaration.

    // Declare and initialize x using 'let'
    let x: number = 10;
    console.log(x);
    
    // Declare and initialize y using 'let'
    let y: number = 20;
    console.log(y);

    // Reassign y
    y = 30;    
    console.log(y);
}

// Uncommenting the lines below would result in compilation errors
// console.log(x);  // error TS2304: Cannot find name 'x'.
// console.log(y);  // error TS2304: Cannot find name 'y'.
test();


// Block-scoped variable 'b' with 'let'
{
    let b: number = 5;
    console.log(b);
}
// Uncommenting the line below would result in a compilation error
// console.log(b);  // error TS2304: Cannot find name 'b'


// Uncommenting the line below would result in a compilation error
// console.log(c);      // error TS2448: Block-scoped variable 'c' used before its declaration.

// Declare and initialize 'c' using 'let'
let c: number = 23; 
console.log(c);  
