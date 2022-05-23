for (let i = 1; i <= 10; i++) {
    console.log(Math.pow(2, i));
}

let j = 1;
while (j <= 10) {
    console.log(Math.pow(2, j));
    j++;
}

let user;
//console.log(user)
do{
    user = prompt("what's your name?");
}while(user.length === 1 || !isNaN(user))

alert(`welcome ${user}!`);


function totalPrice(bill, taxrate = 0.12, tiprate = 0.15){
    return bill * (1 + taxrate + tiprate);
}

function printPrice(func, billamount){
    console.log(func(billamount));
}

printPrice(totalPrice, 100);

let car = {
    make:"mazda",
    color:"silver",
    year:"2021"
};

for(let key in car){
    console.log(key, car[key]);
}

let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
    },
    {
        name: "James",
        age: 40,
        location: "Toronto"
    },
    {
        name: "Garry",
        age: 20,
        location: "Vancouver"
    }
];

let student;
function studentInV(students) {
    for (student of students) {
        if (student.location === "Vancouver") {
            console.log(student);
        }
    }
}
studentInV(students);

function studentOlderThan30(students) {
    for (student of students) {
        if (student.age >= 30) {
            console.log(student);
        }
    }
}
studentOlderThan30(students);