const darkModeCheckbox = document.querySelector('.input');
const icon = document.querySelector('.custom-checkbox');
const nameInput = document.querySelector('.nameBox');
const savedIndicator = document.querySelector('.saved-indicator');
const userNameDisplay = document.getElementById('userNameDisplay'); 

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();

    if (name !== "") {
        localStorage.setItem('userName', name);
        savedIndicator.style.display = "inline-block";
        userNameDisplay.textContent = ` (Currently logged in as: ${name})`; // Update display
    } else {
        localStorage.removeItem('userName');
        savedIndicator.style.display = "none";
        userNameDisplay.textContent = ` (Currently logged in as: Guest)`; // Update display
    }
});

function getUserName(){
    return localStorage.getItem('userName') || "Guest";
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

    userNameDisplay.textContent = ` (Currently logged in as: ${getUserName()})`;
};

window.getUserName = function(){
    return localStorage.getItem('userName') || "Guest";
};


darkModeCheckbox.addEventListener('change', toggleDarkMode);