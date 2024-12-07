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
    '1. Mikä puu tuottaa pieniä, punaisia marjoja, ja se on yleinen pihan koristekasvi?',
    '2. Mikä on yhteyttämisen toinen nimitys?',
    '3. Mikä seuraavista puista tuottaa käpyjä?',
    '4. Mikä siemenen alkiosta kehittyy?',
    '5. Mitä on tuulipölytys?',
    '6. Mikä seuraavista on yksinkertainen tapa tunnistaa havupuu?',
    '7. Mikä seuraavista on tyypillinen kasvi karuilla kankailla?',
    '8. Miten kukkakasvit houkuttelevat pölyttäjiä?',
    '9. Mitä tarkoittaa kasvin talvehtiminen?',
    '10. Mikä seuraavista on tärkeä ravintokasvi poroille?'
]
let answers = [
    'Pihlaja',
    'Fotosynteesi',
    'Mänty',
    'Taimi',
    'Siitepölyn siirtymistä tuulen avulla',
    'Sen lehdet ovat neulasia',
    'Kanerva',
    'Tuottamalla värikkäitä kukkia sekä tuoksua ja mettä',
    'Kasvi menee lepotilaan ja säilyttää ravinteita talven yli',
    'Jäkälä'
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


