const trashItems = [
    { image: "../../IMG/luontopoliisikuvat/lasirikki.png", correctBin: "lasi" },
    { image: "../../IMG/luontopoliisikuvat/muovipullo.png", correctBin: "muovi" },
    { image: "../../IMG/luontopoliisikuvat/ruoka.png", correctBin: "biojate" },
    { image: "../../IMG/luontopoliisikuvat/uutislehti.png", correctBin: "paperi" },
];

let currentIndex = 0;
let score = 0;

function loadTrashItem() {
    const trashImage = document.getElementById("trash-image");
    trashImage.src = trashItems[currentIndex].image;
    trashImage.alt = "Roska";
}

function checkAnswer(selectedBin) {
    const result = document.getElementById("result");
    if (trashItems[currentIndex].correctBin === selectedBin) {
        result.textContent = "Oikein!";
        result.style.color = "green";
        score++;
    } else {
        result.textContent = "Väärin!";
        result.style.color = "red";
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < trashItems.length) {
            loadTrashItem();
            result.textContent = "";
        } else {
            sessionStorage.setItem('luontopoliisiScore', score.toString());
            const url = `./luontopoliisi3.html?score=${score}`;
            window.location.href = url;
        }
    }, 1000);
}

window.onload = loadTrashItem;
