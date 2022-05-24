/* function getNumber() {
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
    let area = Math.PI * Math.pow(radius, 2);
    return area;
} */

let shoppingItems = ['bread', 'cheese', 'green pepper'];
let list = document.querySelector('.shopping');
function updateShoppingList(items) 
{
    for (let item of items)
    {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        list.append(listItem);
        //list.append(item + " ");
    }
}

updateShoppingList(shoppingItems);
