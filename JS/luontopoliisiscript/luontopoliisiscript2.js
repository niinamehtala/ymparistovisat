const trashItems = [
    { image: "../../IMG/luontopoliisikuvat/lasirikki.png", correctBin: "lasi" },
    { image: "../../IMG/luontopoliisikuvat/muovipullo.png", correctBin: "muovi" },
    { image: "../../IMG/luontopoliisikuvat/ruoka.png", correctBin: "biojate" },
    { image: "../../IMG/luontopoliisikuvat/uutislehti.png", correctBin: "paperi" },
];

let currentIndex = 0;
let score = 0;

// Function to load the next trash item image
function loadTrashItem() {
    const trashImage = document.getElementById("trash-image");
    trashImage.src = trashItems[currentIndex].image;
    trashImage.alt = "Roska";
}

// Function to check the user's answer and update the score
function checkAnswer(selectedBin) {
    const result = document.getElementById("result");
    if (trashItems[currentIndex].correctBin === selectedBin) {
        result.textContent = "Oikein!";  // Correct answer message
        result.style.color = "green";  // Green color for correct answer
        score++;  // Increment score
    } else {
        result.textContent = "Väärin!";  // Wrong answer message
        result.style.color = "red";  // Red color for incorrect answer
    }

    setTimeout(() => {
        currentIndex++;  // Move to the next trash item
        if (currentIndex < trashItems.length) {
            loadTrashItem();  // Load the next trash item image
            result.textContent = "";  // Clear result message
        } else {
            sessionStorage.setItem('luontopoliisiScore', score.toString());  // Save score in session storage
            const url = `./luontopoliisi3.html?score=${score}`;  // Construct URL with score
            window.location.href = url;  // Navigate to the result page
        }
    }, 1000);  // Delay of 1 second before moving to the next item
}

// Load the first trash item when the page is loaded
window.onload = loadTrashItem;
