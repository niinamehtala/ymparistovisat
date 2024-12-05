// start screen elements
let startScreen = document.getElementById('start-screen');
let quizScreen = document.getElementById('quiz-screen');
let startButton = document.getElementById('start-button');

// start game
startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden'); // hide the start screen
    quizScreen.classList.remove('hidden'); // show the quiz screen
})

// quiz screen elements
let questions = [
    '1. Kysymys',
    '2. Kysymys',
    '3. Kysymys',
    '4. Kysymys',
    '5. Kysymys',
    '6. Kysymys',
    '7. Kysymys',
    '8. Kysymys',
    '9. Kysymys',
    '10. Kysymys'
]
let answers = [
    '1. vastaus',
    '2. vastaus',
    '3. vastaus',
    '4. vastaus',
    '5. vastaus',
    '6. vastaus',
    '7. vastaus',
    '8. vastaus',
    '9. vastaus',
    '10. vastaus'
]

let points = 0;
let index = 0;

let questionTitle = document.getElementById('question-title')
let result = document.getElementById('result')

questionTitle.textContent = questions[index]

document.getElementById('question-form').addEventListener('submit', checkAnswer)


function checkAnswer(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    if (formData.get('selection') == answers[index]){
        points++
        questionTitle.classList.add('correct')
    }else {
        questionTitle.classList.add('incorrect')

    }

    result.textContent = "Tähän oikea vastaus"
    nextQuestion()

    setTimeout(nextQuestion, 1000)

}

function nextQuestion() {
    index++;
    if (index <= questions.length-1) {
        questionTitle.textContent = questions[index]
    }
}


// let counter = 0;

// let sessionCounter = sessionStorage.getItem('counter');

// if (sessionCounter) {
//     counter = Number(sessionCounter);
// }


