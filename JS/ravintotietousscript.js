//Tämän js-tiedoston järjestys:
//1.Muuttujat
//2.Elementit ja kuuntelijat
//3.Funktiot

//Tiedot haetaan JSON-tiedostosta
import questions from '../DATA/questions.json' with { type: "json" };

//1.Muuttujat:.
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
        if (correctAnswers >= 8) {
            resultMessage.textContent = `Hienoa! Sait ${correctAnswers}/${questions.length} pistettä!`;
        } else {
            resultMessage.textContent = `Sait ${correctAnswers}/${questions.length} pistettä.`;
        }
        saveScoreToSession(correctAnswers);
    }

});

//3.Funktiot:
// Näytetään tietty näkymä ja piilotetaan muut
function showView(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    view.classList.add("active");
}

// Näytetään aloitussivu ensimmäisenä
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


//Tallennetaan pisteet sessionStorageen:
function saveScoreToSession(value) {
    sessionStorage.setItem("ravintotietousScore", value);
}
