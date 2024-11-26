//Järjestys opettajan mielestä kannattaa olla näin js:ssä:
//1.Muuttujat
//2.Elementit ja kuuntelijat
//3.Funktiot

//1.Muuttujat:
// Pelin tila
let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

//2.Elementit ja kuuntelijat:
// Valitaan elementit
const introView = document.getElementById("intro");
const questionView = document.getElementById("question-view");
const resultView = document.getElementById("result-view");

const questionContainer = document.getElementById("question-container");
const imageContainer = document.getElementById("image-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultMessage = document.getElementById("result-message");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showView(questionView);
    showQuestion();
});

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
        resultMessage.textContent = `Sait oikein ${correctAnswers} kysymystä ${questions.length} kysymyksestä.`;
    }
});

restartButton.addEventListener("click", () => {
    showView(introView);
});


//3.Funktiot:
// Näytä tietty näkymä ja piilota muut
function showView(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    view.classList.add("active");
}

// Näytä aloitussivu
showView(introView);


fetch("../DATA/questions.json")
    .then(response => response.json())
    .then(data => {
        questions = data;
    })
    .catch(error => {
        console.error("Virhe ladattaessa kysymyksiä:", error);
    });

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
