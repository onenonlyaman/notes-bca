const darkModeCheckbox = document.querySelector('.input');
const icon = document.querySelector('.custom-checkbox');
const nameInput = document.querySelector('.nameBox');
const savedIndicator = document.querySelector('.saved-indicator');

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim(); //Remove leading/trailing spaces

    if (name !== "") {
        localStorage.setItem('userName', name);
        savedIndicator.style.display = "inline-block"; // Show the indicator
    } else {
        localStorage.removeItem('userName');
        savedIndicator.style.display = "none"; // Hide the indicator if empty
    }
});

function getUserName(){
    return localStorage.getItem('userName') || "Guest" //Return "Guest" if no name stored
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");

    } else {
        localStorage.removeItem("darkMode");
    }
}

window.onload = () => {
    if ("enabled" === localStorage.getItem("darkMode")) {
        document.body.classList.add("dark-mode");
    }
};


darkModeCheckbox.addEventListener('change', toggleDarkMode);