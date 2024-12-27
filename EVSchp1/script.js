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

const download_button =
document.getElementById('download_Btn');
const content =
document.getElementById('content');

download_button.addEventListener
('click', async function () {
    const filename = 'Chapter 1: Human and Environment.pdf';

    try {
        const opt = {
            margin: 1,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in', format: 'letter',
                orientation: 'portrait'
            }
        };
        await html2pdf().set(opt).
            from(content).save();
    } catch (error) {
        console.error('Error:', error.message);
    }
});