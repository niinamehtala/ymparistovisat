// When the window loads, this function retrieves the user's score from the URL parameters
window.onload = function() {
        // Get the URL parameters (query string values)
    const urlParams = new URLSearchParams(window.location.search);
        // Extract the 'score' parameter from the URL
    const score = urlParams.get('score');
        // Update the content of the element with ID 'score' to display the user's score
    document.getElementById("score").textContent = `Sait ${score}/4 oikein!`;
};

// Function to add points to the session storage
function addPoints() {
        // Save the current score (assumed to be stored in the 'points' variable) to session storage
    sessionStorage.setItem('luontopoliisiScore', points.toString())
}

// Lähteet: A lot of help from w3schools materials