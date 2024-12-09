//Elementit:
const villivisailuScore = sessionStorage.getItem("villivisailuScore");
// const resultsElement = document.getElementById("villivisailu-results");

const luontopoliisiScore = sessionStorage.getItem("luontopoliisiScore");
// const resultsElement = document.getElementById("luontopoliisi-results");

const kasvikisailuScore = sessionStorage.getItem("kasvikisailuScore");
// const resultsElement = document.getElementById("kasvikisailu-results");

const ravintotietousScore = sessionStorage.getItem("ravintotietousScore");
const resultsElement = document.getElementById("ravintotietous-results");

// Ravintotietous-pelin pisteet:
if (ravintotietousScore !== null) {
    resultsElement.textContent = `Tulos: ${ravintotietousScore}/10`;
} else {
    // Jos pisteitä ei ole:
    resultsElement.textContent = `Ei tulosta.`;
}

// Villivisailu-pelin pisteet:
if (villivisailuScore !== null) {
    resultsElement.textContent = `Tulos: ${villivisailuScore}/10`;
} else {
    // Jos pisteitä ei ole:
    resultsElement.textContent = `Ei tulosta.`;
}

// Luontopoliisi-pelin pisteet:
if (luontopoliisiScore !== null) {
    resultsElement.textContent = `Tulos: ${luontopoliisiScore}/??`;
} else {
    // Jos pisteitä ei ole:
    resultsElement.textContent = `Ei tulosta.`;
}

// Kasvikisailu-pelin pisteet:
if (kasvikisailuScore !== null) {
    resultsElement.textContent = `Tulos: ${kasvikisailuScore}/10`;
} else {
    // Jos pisteitä ei ole:
    resultsElement.textContent = `Ei tulosta.`;
}