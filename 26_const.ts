/**
 * Function demonstrating variable declarations with 'const'
 */
function test3() {
    // console.log(x);  // error TS2448: Block-scoped variable 'x' used before its declaration.
    // Declare and initialize x using 'const'
    var x = 10;
    console.log(x);
    
    // Declare and initialize y using 'const'
    var y = 20;
    console.log(y);

    // Uncommenting the line below would result in a compilation error
    // y = 30;     // error TS2588: Cannot assign to 'y' because it is a constant.
    console.log(y);
}

// Uncommenting the lines below would result in compilation errors
// console.log(x);  // error TS2304: Cannot find name 'x'.
// console.log(y);  // error TS2304: Cannot find name 'y'.
test3();


// Block-scoped variable 'b' with 'const'
{
    const b: number = 5;
    console.log(b);
}
// Uncommenting the line below would result in a compilation error
// console.log(b);  // error TS2304: Cannot find name 'b'


// Uncommenting the line below would result in a compilation error
// console.log(c);      // error TS2448: Block-scoped variable 'c' used before its declaration.

// Declare and initialize 'c' using 'const'
const c: number = 23; 
console.log(c);  
