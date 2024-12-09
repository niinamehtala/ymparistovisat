//Elementit:
/* const villivisailuScore = sessionStorage.getItem("villivisailuScore");

const luontopoliisiScore = sessionStorage.getItem("luontopoliisiScore");

const kasvikisailuScore = sessionStorage.getItem("kasvikisailuScore"); */

const ravintotietousScore = sessionStorage.getItem("ravintotietousScore");
const resultsElement = document.getElementById("ravintotietous-results");

// Ravintotietous-pelin pisteet:
if (ravintotietousScore !== null) {
    resultsElement.textContent = `Tulos: ${ravintotietousScore}/10`;
} else {
    resultsElement.textContent = `Ei tulosta.`;
}

/*
if (villivisailuScore !== null) {
    resultsElement.textContent = `Tulos: ${villivisailuScore}/10`;
} else {
    resultsElement.textContent = `Ei tulosta.`;
}


if (luontopoliisiScore !== null) {
    resultsElement.textContent = `Tulos: ${luontopoliisiScore}/??`;
} else {
    resultsElement.textContent = `Ei tulosta.`;
}


if (kasvikisailuScore !== null) {
    resultsElement.textContent = `Tulos: ${kasvikisailuScore}/10`;
} else {
    resultsElement.textContent = `Ei tulosta.`;
} */