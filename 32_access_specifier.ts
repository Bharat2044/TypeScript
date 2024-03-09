class A {
    private name: String = "Mike";
    city: String = "Pune";  // bydefault public

    test(): void {
        console.log("test() method of class A");
        console.log("Name = " + this.name);
    }
}

let a = new A();
console.log(a);
a.test();

// console.log("Name = " + a.name);    // error TS2341: Property 'name' is private and only accessible within class 'A'.
console.log("City = " + a.city);
