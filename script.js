// JavaScript for toggle menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// JavaScript for showing words one after the other
document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');
    let index = 0;

    function showWord() {
        if (index < words.length) {
            words[index].style.opacity = '1';
            index++;
            setTimeout(showWord, 1000); // Adjust the delay as needed (in milliseconds)
        }
    }

    showWord(); // Start the animation
});


// preloader
var loader = document.getElementById("preloader");

// Increase the display time to 3 seconds (3000 milliseconds)
var displayTime = 600;

// Hide the preloader after the specified display time
setTimeout(function () {
    loader.style.display = "none";
}, displayTime);