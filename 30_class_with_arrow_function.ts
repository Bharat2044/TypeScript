/**
 * Class A with a method 'test'
 */
class A {
    test(): void {
        console.log("Inside test() method");
        
        // Define an arrow function 'x' within the 'test' method
        let x = () => {
            console.log(100);
        }

        // Call the arrow function 'x'
        x();
    }
}

// Instantiate an object of class A
let a = new A();

// Call the 'test' method of the object 'a'
a.test();
