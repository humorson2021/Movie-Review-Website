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


function totalprice(bill, taxrate = 0.12, tiprate = 0.15){
    return bill * (1 + taxrate + tiprate);
}

function printprice(func, billamount){
    console.log(func(billamount));
}

printprice(totalprice, 100);

let car = {
    make:"mazda",
    color:"silver",
    year:"2021"
};

for(let key in car){
    console.log(key, car[key]);
}