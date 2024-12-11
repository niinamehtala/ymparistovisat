const previousResultsText = document.getElementById('previous-results')
const previousScore = sessionStorage.getItem('kasvikisailuScore')
const previousMaxScore = sessionStorage.getItem('kasvikisailuMaxScore')

// show score if game has been played before
if (previousScore) {
    previousResultsText.textContent = "Pisteesi: " + previousScore + " / " + previousMaxScore
} else {
    previousResultsText.textContent = ''
}

// start game, if played before ask user to confirm
document.getElementById('start-button').addEventListener('click', () => {

    if (previousScore) {
        if (window.confirm("Haluatko varmasti aloittaa uuden pelin? Nykyinen pistetuloksesi nollataan.")) {
            window.location.href = "kasvikisailu2.html"
        }

    } else {
        window.location.href = "kasvikisailu2.html"
    }
})