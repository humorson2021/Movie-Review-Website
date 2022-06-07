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
    let month = transferMonth(today.getMonth());
    let date = today.getDate();
    let s = date + "";
    if (s.length == 1) {
        s = "0" + s;
    }
    showing.textContent = 'Current Date: ' + day + ' ' + month + 
                          ' ' + s + ' ' + today.getFullYear();
}

function transferMonth(mon) {
    if (mon === 1) {
        return "Jan";
    } else if (mon === 2) {
        return "Feb";
    } else if (mon === 3) {
        return "Mar";
    } else if (mon === 4) {
        return "Apr";
    } else if (mon === 5) {
        return "May";
    } else if (mon === 6) {
        return "Jun";
    } else if (mon === 7) {
        return "Jul";
    } else if (mon === 8) {
        return "Aug";
    } else if (mon === 9) {
        return "Sep";
    } else if (mon === 10) {
        return "Oct";
    } else if (mon === 11) {
        return "Nov";
    } else if (mon === 12) {
        return "Dec";
    }
}

let buttonTime = document.getElementById('time');
buttonTime.addEventListener('click', showTime);

function showTime() {
    // let today = new Date();
    // let time = [today.getHours(),today.getMinutes(), today.getSeconds()];
    // for (item of time) {
    //     if (item.length == 1) {
    //         item = "0" + item;
    //     }
    // }
    // showing.textContent = 'Current Time: ' + time[0] + ':' + 
    //                       time[1] + ':' + time[2];
    showingTime();
    setInterval(showingTime, 1000);
}

function showingTime() {
    showing.textContent = "Current Time: " + new Date().toLocaleTimeString();
}