/**
 * Class A with a static variable 'x'
 */
class A {
    // Static variable 'x' with an initial value
    static x: number = 10;
}

// Access and log the static variable 'x' of class A
console.log(A.x);


/**
 * Class B with a static variable 'x', an instance variable 'x',
 * and static/instance methods
 */
class B {
    // Static variable 'x' with an initial value
    static x: number = 10;

    // Instance variable 'x' with an initial value
    x: number = 20;

    // Static method 'test' for class B
    static test() {
        console.log("From class B static test() method");
    }

    // Instance method 'test' for class B
    test() {
        console.log("From class B instance test() method");
    }
}

// Access and log the static variable 'x' of class B
console.log(B.x);

// Call the static method 'test' of class B
B.test();

// Instantiate an object of class B
let b = new B();

// Access and log the instance variable 'x' of object 'b'
console.log(b.x);

// Call the instance method 'test' of object 'b'
b.test();
