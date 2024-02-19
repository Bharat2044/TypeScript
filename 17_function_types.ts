
let sumFun = function(a: number, b: number): void {
    console.log(a + b);
}

sumFun(10, 5);


let diffFun = (a: number, b: number): number => {
    return a - b;
}

console.log(diffFun(10, 5));


let p:(a: number, b: number) => number = function mulFun(x: number, y: number) {
    return x * y;
}

console.log(p(10, 5));



let per: {
    firstName: string,
    lastName: string,
    getFullName: () => string
}

per = {
    firstName: "Bharat",
    lastName: "Kumar",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(per);
console.log(per.getFullName());
