window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    document.getElementById("score").textContent = `Sait ${score}/4 oikein!`;
};

function addPoints() {
    sessionStorage.setItem('luontopoliisiScore', points.toString())
}