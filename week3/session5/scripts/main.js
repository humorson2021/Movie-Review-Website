// function getNumber() {
//     let num;
//     do {
//         num = prompt("enter a number");
//     } while (isNaN(num));
//     return num;
// }

// let number = getNumber();
let radius = document.querySelector("#radius");
radius.classList.toggle('paragraph');
//radius.setAttribute("class", "paragraph");
//radius.style = "color:red";

// radius.innerText += number;

// function areaOfCircle(radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     return area;
// }

let shoppingItems = ["bread", "cheese", "green pepper"];
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

//activity 3
function squareList() {
    list.classList.add("squareList");
}
squareList();

function greenItem() {
    let listItems = document.querySelectorAll('.shopping li');
    for (let item of listItems) {
        if (item.textContent.includes('green')) {
            item.classList.add('greenItem');
        }
    }
    //console.log(listItems);
}

greenItem();