/**
 * Interface A with a method 'test'
 */
interface A {
    test(): void;
}

/**
 * Class B implementing interface A
 */
class B implements A {
    test() {
        console.log("From test");
    }
}

// Instantiate an object of class B
let b = new B();

// Call the 'test' method of object 'b'
b.test();


/**
 * Interface C with a property 'name' and a method 'test'
 */
interface C {
    name: string;
    test(): void;
}

/**
 * Class D implementing interface C
 */
class D implements C {
    // Property 'name' with a default value
    name: string = "Raj";

    // Additional method 'demo'
    demo(): void {
        console.log("From demo");
    }

    // Implementing the 'test' method from interface C
    test() {
        // Accessing the 'name' property and logging it
        console.log(this.name);
        
        // Logging from the 'test' method
        console.log("From test");
    }
}

// Instantiate an object of class D
let d = new D();

// Call the 'test' method of object 'd'
d.test();

// Call the 'demo' method of object 'd'
d.demo();
