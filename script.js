const darkModeButton = document.querySelector('.dark-mode-button');
const tocLinks = document.querySelectorAll(".stackedit__toc a");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeButton.textContent = "Light Mode";
    } else {
        localStorage.removeItem("darkMode");
        darkModeButton.textContent = "Dark Mode";
    }
}

tocLinks.forEach(e => {
    e.addEventListener("click", function(e) {
        e.preventDefault();
        let t = this.getAttribute("href"),
            o = document.querySelector(t);
        o && o.scrollIntoView({ behavior: "smooth" })
    })
}), window.onload = () => {
    "enabled" === localStorage.getItem("darkMode") && document.body.classList.add("dark-mode");
};Mode  