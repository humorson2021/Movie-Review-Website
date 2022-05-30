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

let updateImageButton = document.querySelector('#updateImage');
//updateImageButton.textContent = localStorage.getItem('buttonText')?
//localStorage.getItem('buttonText'):'Click Me!';
updateImageButton.textContent = localStorage.getItem('buttonText') ||'Click Me!';
function changeButtonText()
{
    if(updateImageButton.textContent === 'Click Me!')
    {
        updateImageButton.textContent = "Clicked!";
        localStorage.setItem('buttonText','Clicked!');
    }
    else{
        updateImageButton.textContent = "Click Me!";
        localStorage.setItem('butonText', 'Click Me!');
    }
}

updateImageButton.addEventListener('click',changeButtonText);

function changeImageShoppingCart(e)
{
    console.log(e)
    let shoppingCartImage = document.querySelector('#shoppingCart');
    shoppingCartImage.src = "images/shoppingCart.png"
    shoppingCartImage.alt = "shopping Cart icon"
    shoppingCartImage.width = 50;
    shoppingCartImage.height= 50;
}
updateImageButton.addEventListener('click',changeImageShoppingCart,{once:true});

// let buttons = document.querySelectorAll('img ~ button');
// for (let button of buttons)
// {
//     button.addEventListener('mouseover', changeButtonColor)
// }

let buttonContainer = document.querySelector('div');
buttonContainer.addEventListener('mouseover', changeButtonColor);
function changeButtonColor(event)
{
   event.target.style.backgroundColor = event.target.textContent;
}


list.addEventListener('click', addStrikethrough);
function addStrikethrough()
{
    for (let item of list) {
        item.classList.add('addLineThrough');
    }
}
