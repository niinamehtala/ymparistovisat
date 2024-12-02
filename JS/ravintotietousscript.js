///Järjestys kannattaa olla näin js:ssä:
//1.Muuttujat
//2.Elementit ja kuuntelijat
//3.Funktiot

//Tiedot haetaan staattisesti
import questions from '../DATA/questions.json' with { type: "json" };

//1.Muuttujat:.
// let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

//2.Elementit ja kuuntelijat:
// Elementit:
const introView = document.getElementById("intro");
const questionView = document.getElementById("question-view");
const resultView = document.getElementById("result-view");

const questionContainer = document.getElementById("question-container");
const imageContainer = document.getElementById("image-container");
const optionsContainer = document.getElementById("options-container");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const resultMessage = document.getElementById("result-message");


// Kuuntelijat:
startButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showView(questionView);
    showQuestion();
})

nextButton.addEventListener("click", () => {
    const selectedAnswer = optionsContainer.value;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showView(resultView);
        resultMessage.textContent = `Sait ${correctAnswers}/${questions.length} pistettä!`;
    }
});

// addEventListener("DOMContentLoaded", () => {
//     loadQuestions()
// })


//3.Funktiot:
//Kysymysten lataus:
// async function loadQuestions() {
//     try {
//         console.log("heippa");
//         const response = await fetch("../DATA/questions.json");
//         questions = await response.json();
//         console.log("Kysymykset ladattu:", questions);
//     } catch (error) {
//         console.error("Kysymysten lataus epäonnistui:", error);
//     }
// }

// Näytä tietty näkymä ja piilota muut
function showView(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    view.classList.add("active");
}

// Näytä aloitussivu ensimmäisenä
showView(introView);

//Yksi kysymys kerrallaan näkyvillä
function showQuestion() {
    const question = questions[currentQuestionIndex];

    questionContainer.textContent = question.question;
    imageContainer.src = question.image;
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);
    });
}

//Nappia painamalla siirrytään seuraavaan kysymykseen ja jos oikein, niin lisää oikein vastattujen määrää yhdellä
function nextQuestion() {
    const selectedAnswer = optionsContainer.value;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    showQuestion();
}

//Näytetään tulokset:
function showResults() {
    const introView = document.getElementById("intro");
    const questionView = document.getElementById("question-view");
    const resultView = document.getElementById("result-view");

    introView.classList.remove("active");
    questionView.classList.remove("active");
    resultView.classList.add("active");

    resultMessage.textContent = `Sait ${correctAnswers}/${questions.length} pistettä!`;
}


// //Testi, latautuuko kysymykset
// console.log("Yritetään ladata tiedostoa ../DATA/questions.json");

// if (questions.length === 0) {
//     console.error("Kysymyksiä ei ladattu! Tarkista JSON-tiedoston polku tai sisältö.");
// }
