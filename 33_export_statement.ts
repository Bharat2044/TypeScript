let x = 10;

function test(): void {
    console.log("From test() Method");    
}

class A {
    name: String = "Mike";

    constructor() {
        console.log(this.name);        
    }
}


export {
    x,
    test,
    A
}



// export let x = 10;

// export function test(): void {
//     console.log("From test() Method");    
// }

// export class A {
//     name: String = "Mike";

//     constructor() {
//         console.log(this.name);        
//     }
// }
