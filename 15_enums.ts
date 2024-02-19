// Enum -> group of named constant values.

enum days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
};

console.log(days);
console.log(days.Monday);
console.log(days.Friday);



enum Months {
    Jan, 
    Feb, 
    Mar, 
    Apr, 
    May, 
    Jun, 
    Jul, 
    Aug, 
    Sept, 
    Oct, 
    Nov, 
    Dec,
};

// console.log(Months);
// console.log(Months.Mar);
// console.log(Months.Dec);

function myFun(value: Months) {
    switch(value) {
        case Months.Jan:
            console.log("This is 1st month of year.");
            break;

        case Months.Feb:
            console.log("This is 2nd month of year.");
            break;

        case Months.Mar:
            console.log("This is 3rd month of year.");
            break;

        case Months.Apr:
            console.log("This is 4th month of year.");
            break;

        case Months.May:
            console.log("This is 5th month of year.");
            break;

        case Months.Jun:
            console.log("This is 6th month of year.");
            break;

        case Months.Jul:
            console.log("This is 7th month of year.");
            break;

        case Months.Aug:
            console.log("This is 8th month of year.");
            break;

        case Months.Sept:
            console.log("This is 9th month of year.");
            break;

        case Months.Oct:
            console.log("This is 10th month of year.");
            break;

        case Months.Nov:
            console.log("This is 11th month of year.");
            break;

        case Months.Dec:
            console.log("This is 12th month of year.");
            break;
        
        default:
            console.log("Not a valid Months");            
    }
}

myFun(Months.Feb);
myFun(Months.Dec);



enum OrderStatus {
    Pending,
    Delivered,
    Dispatch
};

let order: {title: string, price: number, status: OrderStatus, date: Date};

order = {
    title: "Samsung TV1234",
    price: 1232.56,
    status: OrderStatus.Dispatch,
    date: new Date(),
};

console.log(order);
