let student: {
    name: string,
    age: number,
    isActive: boolean,
    address: string,
    phone: number
} = {
    name: "Bharat",
    age: 21,
    isActive: true,
    address: 'Samastipur, Bihar',
    phone: 8787878787
};

console.log(typeof student);
console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.isActive);
console.log(student.address);
console.log(student.phone);

for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key + " = " + student[key as keyof typeof student]);
    }
}


// empty object
let person = {};