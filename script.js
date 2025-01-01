// Service worker registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const toggleIcon = document.querySelector('.dark-mode-toggle');

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleIcon.classList.remove('fa-toggle-on');
        toggleIcon.classList.add('fa-toggle-off');
        toggleIcon.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    } else {
        localStorage.removeItem("darkMode");
        toggleIcon.classList.remove('fa-toggle-off');
        toggleIcon.classList.add('fa-toggle-on');
        toggleIcon.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    }
}

// Get user name function
function getUserName() {
    return localStorage.getItem('userName') || "Guest";
}

// Table of contents link handling
const tocLinks = document.querySelectorAll(".stackedit__toc a");
tocLinks.forEach(e => {
    e.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        const element = document.querySelector(target);
        element && element.scrollIntoView({ behavior: "smooth" });
    });
});

// Menu toggle function
function menuToggle() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const menuToggleBtn = document.getElementById('menuToggle');
    menuToggleBtn.addEventListener('click', menuToggle);
});


// On load functions
window.onload = () => {
    //Initial Dark Mode check
    if ("enabled" === localStorage.getItem("darkMode")) {
        document.body.classList.add("dark-mode");
    }

    const greetingElement = document.getElementById('greeting');
    const userName = getUserName();
    greetingElement.textContent = `Hello, ${userName}! `;
};
setTimeout(function() {
    const splashScreen = document.querySelector('.splash-screen');
    splashScreen.style.opacity = '0'; // Trigger fade-out

    setTimeout(function() {
        splashScreen.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1000); // Delay to ensure fade-out completes
}, 3000);