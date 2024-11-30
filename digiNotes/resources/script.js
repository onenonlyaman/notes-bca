const icon = document.querySelector('.dark-mode-button');

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        icon.src = "../resources/lm.svg";
    } else {
        localStorage.removeItem("darkMode");
        icon.src = "../resources/dm.svg";
    }
}

window.onload = () => {
    "enabled" === localStorage.getItem("darkMode") && document.body.classList.add("dark-mode");
};

// hide button code
let buttonsHidden = false;
let hideAnimationInterval;
let showAnimationInterval;

function toggleButtons() {
    buttonsHidden = !buttonsHidden;
    const buttons = Array.from(document.querySelectorAll('.dark-mode-button, .daSvgWithId'));
    const hideBtn = document.querySelector('.hideBtn');

    if (buttonsHidden) {
        hideBtn.src = '../resources/show.svg';
        hideAnimationInterval = setInterval(() => {
            buttons.forEach((button, index) => {
                const delay = index * 100;
                setTimeout(() => {
                    button.style.transition = 'transform 0.3s ease';
                    button.style.transform = `translateX(100px)`;
                }, delay);
            });
            clearInterval(hideAnimationInterval);
        }, 300);

    } else { // Show buttons
        hideBtn.src = '../resources/hide.svg';
        const reversedButtons = [...buttons].reverse(); // Create a reversed copy

        showAnimationInterval = setInterval(() => {
            reversedButtons.forEach((button, index) => {
                const delay = index * 100; // Use index from reversed array
                setTimeout(() => {
                    button.style.transition = 'transform 0.3s ease';
                    button.style.transform = 'translateX(0)';
                }, delay);
            });
            clearInterval(showAnimationInterval);
        }, 300);
    }
}

let isScrollingDown = true; // Track scroll direction

function scrollToTopOrBottom() {
    const upDownBtn = document.querySelector('.upDownBtn');
    if (isScrollingDown) {
        // Scroll to bottom
        document.getElementById('bottomScroll').scrollIntoView({ behavior: 'smooth' });
        upDownBtn.src = '../resources/up.svg'; // Change icon to up arrow
        isScrollingDown = false;
    } else {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        upDownBtn.src = '../resources/down.svg'; // Change icon to down arrow
        isScrollingDown = true;
    }
}

const loadingOverlay = document.getElementById('loadingOverlay');

// Set a timeout to hide the overlay after 3 seconds
setTimeout(() => {
    loadingOverlay.classList.add('hidden'); 
}, 3000); 

