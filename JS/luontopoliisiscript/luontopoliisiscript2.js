const trashItems = [
        // List of trash items and their correct sorting bins
    { image: "../../IMG/luontopoliisikuvat/lasirikki.png", correctBin: "lasi" },
    { image: "../../IMG/luontopoliisikuvat/muovipullo.png", correctBin: "muovi" },
    { image: "../../IMG/luontopoliisikuvat/ruoka.png", correctBin: "biojate" },
    { image: "../../IMG/luontopoliisikuvat/uutislehti.png", correctBin: "paperi" },
];

let currentIndex = 0; // Index of the current trash item in the list
let score = 0; // User's score

function loadTrashItem() {
        // Loads the current trash item image and displays it on the page
    const trashImage = document.getElementById("trash-image");
    trashImage.src = trashItems[currentIndex].image; // Sets the image source
    trashImage.alt = "Roska"; // Sets the alternative text
}

function checkAnswer(selectedBin) {
        // Checks if the user's selected bin is correct
    const result = document.getElementById("result");
    if (trashItems[currentIndex].correctBin === selectedBin) {
                // If the answer is correct, show a message and increase the score
        result.textContent = "Oikein!";
        result.style.color = "green";
        score++;
    } else {
        result.textContent = "Väärin!";
        result.style.color = "red";
    }

        // Move to the next trash item or finish the game
    setTimeout(() => {
        currentIndex++; // Move to the next index in the list
        if (currentIndex < trashItems.length) {
                        // If there are more trash items, load the next one
            loadTrashItem();
            result.textContent = ""; // Clear the result message
        } else {
                        // If all trash items are done, save the score and move to the next page
            sessionStorage.setItem('luontopoliisiScore', score.toString()); // Save the score to session storage
            const url = `./luontopoliisi3.html?score=${score}`; // Construct the URL for the next page
            window.location.href = url; // Redirect to the next page
        }
    }, 1000);
}

window.onload = loadTrashItem; // Load the first trash item when the page is loaded

// A lot of help from w3schools materials