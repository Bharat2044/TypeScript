/**
 * Class A with non-static variables and a method 'test'
 */
class A {
    // Non-static variables
    id: number;
    name: string;
    city: string;

    // Method to initialize and display variables
    test(): void {
        this.id = 101;
        this.name = "Bharat";
        this.city = "Pune";

        // Log the values of variables
        console.log("Id = ", this.id);
        console.log("Name = ", this.name);
        console.log("City = ", this.city);
    }
}

// Instantiate an object of class A
let a = new A();

// Call the 'test' method of the object 'a'
a.test();



/**
 * Class B with a constructor
 */
class B {
    // Constructor with a log statement
    constructor() {
        console.log(100);
    }
}

// Instantiate an object of class B
let b = new B();



/**
 * Class C with constructor and non-static variables
 */
class C {
    id: number;
    name: string;
    city: string;

    // Constructor to initialize variables
    constructor(id: number, name: string, city: string) {        
        this.id = id;
        this.name = name;
        this.city = city;
    }

    // Method to display variable values
    test(): void {
        console.log("Id = ", this.id);
        console.log("Name = ", this.name);
        console.log("City = ", this.city);
    }
}

// Instantiate objects of class C with different values
let c1 = new C(20, "Deepak", "Delhi");
let c2 = new C(21, "Raju", "Bangalore");

// Call the 'test' method for both objects
c1.test();
c2.test();



/**
 * Class D with non-static variables
 */
class D {
    // Non-static variables with default values
    x: string = "mike";
    y: number = 10;
}

// Instantiate an object of class D
let d = new D();

// Access and log the values of non-static variables
console.log(d.x);
console.log(d.y);



/**
 * Class E with constructor and non-static variables
 */
class E {
    // Non-static variables with default values set in the constructor
    id: number;
    name: string;

    // Constructor to set default values
    constructor() {
        this.id = 10;
        this.name = "Mike";
    }
}

// Instantiate an object of class E
let e = new E();

// Access and log the values of non-static variables
console.log(e.id);
console.log(e.name);


/**
 * Creating an object 'obj' with specified properties
 */
let obj: {
    "id": number,
    "city": string
} = {
    "id": 1,
    "city": "Pune"
}

// Log the object and its properties
console.log(obj);
console.log(obj.id);
console.log(obj.city);
