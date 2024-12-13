
//Tämän js-tiedoston järjestys:
//1.Muuttujat
//2.Elementit ja kuuntelijat
//3.Funktiot

// Tiedot haetaan JSON-tiedostosta
import questions from '../DATA/questions.json' with { type: "json" };

// 1. Muuttujat
let currentQuestionIndex = 0;
let correctAnswers = 0;

// 2. Elementit
const introView = document.getElementById("intro");
const questionView = document.getElementById("question-view");
const resultView = document.getElementById("result-view");

const questionContainer = document.getElementById("question-container");
const imageContainer = document.getElementById("image-container");
const optionsContainer = document.getElementById("options-container");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const resultMessage = document.getElementById("result-message");
const feedbackContainer = document.getElementById("feedback-container");

// Aloitussivu näkyy ensimmäisenä
showView(introView);

// 2. Kuuntelijat
//Aloitus-nappi:
startButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showView(questionView);
    showQuestion();
});

//Vastaa-nappi:
nextButton.addEventListener("click", () => {
    const selectedAnswer = optionsContainer.value;
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correct;

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        showFeedback(true, correctAnswer);
    } else {
        showFeedback(false, correctAnswer);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            feedbackContainer.classList.add("hidden");
            showQuestion();
        }, 2500);
    } else {
        setTimeout(() => {
            showView(resultView);

            if (correctAnswers >= 8) {
                resultMessage.textContent = `Hienoa! Sait ${correctAnswers}/${questions.length} pistettä.`;
            } else {
                resultMessage.textContent = `Sait ${correctAnswers}/${questions.length} pistettä.`;
            }

            saveScoreToSession(correctAnswers);
        }, 2500);
    }
});

// 3. Funktiot
// Näytetään tietty näkymä ja piilotetaan muut
function showView(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    view.classList.add("active");
}

// Näytetään kysymys
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    imageContainer.src = question.image || "";
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);
    });
}

// Näytetään, meinkö oikein vai väärin
function showFeedback(isCorrect, correctAnswer) {
    const feedbackText = document.getElementById("feedback-text");
    const correctAnswerText = document.getElementById("correct-answer-text");

    if (isCorrect) {
        feedbackText.textContent = "Vastasit oikein!";
        correctAnswerText.textContent = "Tienasit yhden pisteen!";
    } else {
        feedbackText.textContent = "Vastasit väärin!";
        correctAnswerText.textContent = `Oikea vastaus: ${correctAnswer}`;
    }

    feedbackContainer.classList.remove("hidden");
}

// Tallennetaan pisteet sessionStorageen
function saveScoreToSession(value) {
    sessionStorage.setItem("ravintotietousScore", value);
}


/* Lähteet:
Tämän pelin kuuntelijan (nextButton) osioihin showFeedback ja setTimeOut kirjoittamiseen on hyödynnetty tekoälyä: ChatGPT (OpenAI, 2024). */