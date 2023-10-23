textOptions = ["Frontend Developer", "Software Engineer"];
let currentIndex = 0;
const textDisplay = document.getElementById("domain");

function updateText() {
    textDisplay.textContent = textOptions[currentIndex];
    currentIndex = (currentIndex + 1) % textOptions.length;
}

// Initially set the text
updateText();

// Update the text every 2 seconds
setInterval(updateText, 2000);