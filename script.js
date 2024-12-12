const icon = document.querySelector('.dark-mode-button');
const tocLinks = document.querySelectorAll(".stackedit__toc a");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        icon.src = "resources/lm.svg";
    } else {
        localStorage.removeItem("darkMode");
        icon.src = "resources/dm.svg";
    }
}

function getUserName() {
    return localStorage.getItem('userName') || "Guest" //Return "Guest" if no name stored
}

tocLinks.forEach(e => {
    e.addEventListener("click", function (e) {
        e.preventDefault();
        let t = this.getAttribute("href"),
            o = document.querySelector(t);
        o && o.scrollIntoView({ behavior: "smooth" })
    })
});

window.onload = function () {
    const greetingElement = document.getElementById('greeting');
    const userName = window.getUserName(); // Access getUserName from main.js
    "enabled" === localStorage.getItem("darkMode") && document.body.classList.add("dark-mode");
    greetingElement.textContent = `Hello, ${userName}! `;
};

if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
}

// function toggleTOC() {
//   const toc = document.querySelector('.stackedit__toc');
//   toc.classList.toggle('expanded');
// }

// const toggleButton = document.querySelector('.toc-toggle');
// toggleButton.addEventListener('click', toggleTOC);
