/**
 * Class A with a method 'test'
 */
class A {
    test() {
        console.log("From class A test() method");
    }
}

/**
 * Class B extending class A with an additional method 'demo'
 */
class B extends A {
    demo() {
        console.log("From class B demo() method");
    }
}

// Instantiate an object of class B
let b = new B();

// Call the 'test' and 'demo' methods of object 'b'
b.test();
b.demo();


/**
 * Class C extending class A and overriding the 'test' method
 */
class C extends A {
    test() {
        console.log("From class C test() method");
    }
}

// Instantiate an object of class C
let c = new C();

// Call the overridden 'test' method of object 'c'
c.test();


/**
 * Class D extending class B
 */
class D extends B {

}

// Instantiate an object of class D
let d = new D();

// Call the 'test' and 'demo' methods inherited from class B on object 'd'
d.test();
d.demo();
