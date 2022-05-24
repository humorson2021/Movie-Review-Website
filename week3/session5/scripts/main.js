function getNumber() {
    let num;
    do {
        num = prompt("enter a number");
    } while (isNaN(num));
    return num;
}

let number = getNumber();
let radius = document.querySelector("#radius");
radius.innerText += number;

function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
