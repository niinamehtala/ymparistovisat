// elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const startButton = document.getElementById('start-button');

// start game
startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden'); // Piilotetaan aloitussivu
    quizScreen.classList.remove('hidden'); // Näytetään visailusivu
});