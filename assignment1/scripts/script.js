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