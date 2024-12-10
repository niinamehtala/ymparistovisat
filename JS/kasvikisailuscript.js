const previousResultsText = document.getElementById('previous-results')
const previousScore = sessionStorage.getItem('kasvikisailuScore')
const previousMaxScore = sessionStorage.getItem('kasvikisailuMaxScore')

if (previousScore) {
    previousResultsText.textContent = "Pisteesi: " + previousScore + " / " + previousMaxScore
    console.log("previous score found") // poista
} else {
    previousResultsText.textContent = ''
}


document.getElementById('start-button').addEventListener('click', () => {
    if (previousScore) {
        if (window.confirm("Haluatko varmasti aloittaa alusta? Menetät kaikki tähän asti ansaitut pisteet.")) {
            window.location.href = "kasvikisailu2.html"
        } else {
            console.log ("user declined") // poista
        }
    } else {
        window.location.href = "kasvikisailu2.html"
    }
})