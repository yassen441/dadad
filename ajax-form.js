// Define the text and image URL
const text = "Yakoo Updated For 3.5 PUBG";

// Set the text content and image source
document.getElementById("custom-text").textContent = text;
document.getElementById("custom-image").src = imageUrl;

// Define a variable to control visibility (0 for hide, 1 for show)
const visibilityControl = 1; // Set to 0 to hide, 1 to show

// Hide the custom-div if visibilityControl is 0
if (visibilityControl === 0) {
    document.querySelector(".custom-div").style.display = "none";
}