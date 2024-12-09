//Elementit:
//Muutetaan tulos numeroksi ja tulos on 0 jos peliä ei ole pelattu.
const ravintotietousScore = parseInt(sessionStorage.getItem("ravintotietousScore")) || 0;
const kasvikisailuScore = parseInt(sessionStorage.getItem("kasvikisailuScore")) || 0;
const luontopoliisiScore = parseInt(sessionStorage.getItem("luontopoliisiScore")) || 0;
const villivisailuScore = parseInt(sessionStorage.getItem("villivisailuScore")) || 0;

const ravintotietousresultsElement = document.getElementById("ravintotietous-results");

const totalScore = ravintotietousScore + kasvikisailuScore + luontopoliisiScore + villivisailuScore;
const totalScoreElement = document.getElementById("total-score");
totalScoreElement.textContent = `Yhteensä: ${totalScore} pistettä`;

// Ravintotietous-pelin pisteet:
if (ravintotietousScore !== null) {
    ravintotietousresultsElement.textContent = `Tulos: ${ravintotietousScore}/10`;
} else {
    ravintotietousresultsElement.textContent = `Ei tulosta.`;
}

//Yhteispisteet:
if (totalScore > 0) {
    totalScoreElement.textContent = `Yhteensä: ${totalScore}/40 pistettä`;
} else {
    totalScoreElement.textContent = `Ei yhteispisteitä.`;
}

/*
if (villivisailuScore !== null) {
    villivisailuresultsElement.textContent = `Tulos: ${villivisailuScore}/10`;
} else {
    villivisailuresultsElement.textContent = `Ei tulosta.`;
}


if (luontopoliisiScore !== null) {
    luontopoliisiresultsElement.textContent = `Tulos: ${luontopoliisiScore}/??`;
} else {
    luontopoliisiresultsElement.textContent = `Ei tulosta.`;
}


if (kasvikisailuScore !== null) {
    kasvikisailuresultsElement.textContent = `Tulos: ${kasvikisailuScore}/10`;
} else {
    kasvikisailuresultsElement.textContent = `Ei tulosta.`;
} */