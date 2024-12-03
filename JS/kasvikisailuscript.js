// start screen elements
let startScreen = document.getElementById('start-screen');
let quizScreen = document.getElementById('quiz-screen');
let startButton = document.getElementById('start-button');

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

let questionElement = document.getElementById('question-title')
document.getElementById('question-form').addEventListener('submit', checkAnswer)

// start game
startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden'); // hide the start screen
    quizScreen.classList.remove('hidden'); // show the quiz screen
});

function checkAnswer(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    if (formData.get('selection') == answer[index]){
        points++
    }else

}


// let counter = 0;

// let sessionCounter = sessionStorage.getItem('counter');

// if (sessionCounter) {
//     counter = Number(sessionCounter);
// }


