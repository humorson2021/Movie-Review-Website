let buttonTheme = document.querySelector('button');
buttonTheme.textContent = "Change to dark theme";
let body = document.querySelector('body');
buttonTheme.addEventListener('click', changeTheme);
localStorage.setItem('theme', 'light');

function changeTheme() {
    body.classList.toggle('dark');

    if (buttonTheme.textContent === "Change to dark theme") {
        buttonTheme.textContent = "Change to light theme";
        localStorage.setItem('theme', 'dark');
    } else {
        buttonTheme.textContent = "Change to dark theme";
        localStorage.setItem('theme', 'light');
    }
}

let showing = document.querySelector('section p');

let buttonDate = document.getElementById('date');
buttonDate.addEventListener('click', showDate);
let day;
function showDate() {
    let today = new Date();
    if (today.getDay() === 1) {
        day = 'Mon';
    } else if (today.getDay() === 2) {
        day = 'Tue';
    } else if (today.getDay() === 3) {
        day = 'Wed';
    } else if (today.getDay() === 4) {
        day = 'Thu';
    } else if (today.getDay() === 5) {
        day = 'Fri';
    } else if (today.getDay() === 6) {
        day = 'Sat';
    } else {
        day = 'Sun';
    }
    showing.textContent = 'Current Date: ' + day + ' ' + today.getMonth() + 
                          '/' + today.getDate() + '/' + today.getFullYear();
}

let buttonTime = document.getElementById('time');
buttonTime.addEventListener('click', showTime);

function showTime() {
    let today = new Date();
    showing.textContent = 'Current Time: ' + today.getHours() + ':' + 
                          today.getMinutes() + ':' + today.getSeconds();
}