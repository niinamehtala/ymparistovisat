// questions, options and answers
let questions = [
    {
        question: "1. Mikä puu tuottaa pieniä, punaisia marjoja, ja se on yleinen pihan koristekasvi?",
        options: ["Pihlaja", "Koivu", "Tammi", "Vaahtera"],
        answer: "Pihlaja"
    },
    {
        question: "2. Millä toisella nimellä yhteyttämistä usein kutsutaan?",
        options: ["Kasvukierto", "Fotosynteesi", "Haihtuminen", "Lehtivihreä"],
        answer: "Fotosynteesi"
    },
    {
        question: "3. Mikä seuraavista puulajeista tuottaa käpyjä?",
        options: ["Koivu", "Mänty", "Pihlaja", "Vaahtera"],
        answer: "Mänty"
    },
    {
        question: "4. Millä nimellä kutsutaan nuorta kasvia, joka kehittyy siemenen alkiosta?",
        options: ["Kukka", "Hedelmä", "Taimi", "Juuri"],
        answer: "Taimi"
    },
    {
        question: "5. Mitä tarkoitetaan, kun puhutaan tuulipölytyksestä?",
        options: ["Siementen kulkeutumista tuulen mukana", "Siitepölyn siirtymistä tuulen avulla", "Kasvin siirtymistä tuulen mukana", "Lehden irtoamista tuulessa"],
        answer: "Siitepölyn siirtymistä tuulen avulla"
    },
    {
        question: "6. Mikä seuraavista on yksinkertainen tapa tunnistaa havupuu?",
        options: ["Se pudottaa lehtensä syksyllä", "Sen runko on vihreä", "Se tuottaa värikkäitä kukkia", "Sen lehdet ovat neulasia"],
        answer: "Sen lehdet ovat neulasia"
    },
    {
        question: "7. Mikä seuraavista on tyypillinen kasvi karuilla kankailla?",
        options: ["Voikukka", "Nokkonen", "Pihlaja", "Kanerva"],
        answer: "Kanerva"
    },
    {
        question: "8. Miten kukkakasvit houkuttelevat pölyttäjiä?",
        options: ["Kasvattamalla suuria siemeniä", "Tuottamalla värikkäitä kukkia sekä tuoksua ja mettä", "Levittämällä kukkiaan tuulen mukana", "Varastoimalla vettä hedelmiinsä"],
        answer: "Tuottamalla värikkäitä kukkia sekä tuoksua ja mettä"
    },
    {
        question: "9. Mitä tarkoitetaan kasvin talvehtimisella?",
        options: ["Kasvi menee lepotilaan ja säilyttää ravinteita talven yli", "Kasvi kuolee joka talvi ja kasvaa uudelleen keväällä", "Kasvi kasvattaa uusia siemeniä talvella", "Kasvi muuttuu täysin ruskeaksi kylmällä säällä"],
        answer: "Kasvi menee lepotilaan ja säilyttää ravinteita talven yli"
    },
    {
        question: "10. Mikä seuraavista kasveista on tärkeä ravintokasvi poroille?",
        options: ["Kangasrousku", "Jäkälä", "Puolukka", "Mänty"],
        answer: "Jäkälä"
    }
];

let points = 0;
let index =  0;

let alertText = document.getElementById('alert')
let resultText = document.getElementById('result')

const questionTitle = document.getElementById('question-title')
const nextButton = document.getElementById('submit')

const optionsLabels = [
    document.querySelector('label[for="selection1"]'),
    document.querySelector('label[for="selection2"]'),
    document.querySelector('label[for="selection3"]'),
    document.querySelector('label[for="selection4"]')
];
const optionsInputs = [
    document.getElementById('selection1'),
    document.getElementById('selection2'),
    document.getElementById('selection3'),
    document.getElementById('selection4')
];

showQuestion()

// update and show the question and answer options
function showQuestion() {

    questionTitle.classList.remove('correct', 'incorrect')

    document.getElementById('result').textContent = ''

    const currentQuestion = questions[index]

    questionTitle.textContent = questions[index].question

    currentQuestion.options.forEach((option, i) => {
        optionsLabels[i].textContent = option
        optionsInputs[i].value = option
        optionsInputs[i].checked = false; 
        optionsLabels[i].style = false;

    })
  
    nextButton.disabled = false
    nextButton.classList.remove('button-disabled')

}

// click next -button to check the answer and move on to the next question
document.getElementById('question-form').addEventListener('submit', checkAnswer)


function checkAnswer(event) {

    event.preventDefault();
    let formdata = new FormData(event.currentTarget)

    // inform if no option checked
    if (!formdata.get('selection')) {
        alertText.textContent = "Valitse vastaus jatkaaksesi"
        alertText.style.color = "red"
        alertText.style.fontSize = '1.2em'

        setTimeout(() => {
            alertText.textContent = "";
        }, 1000)
            return
    }

    nextButton.disabled = true
    nextButton.classList.add('button-disabled')
    
    
    const correctInputId = optionsInputs.find(input => input.value === questions[index].answer).id;
    const correctLabel = document.querySelector(`label[for="${correctInputId}"]`);
    correctLabel.style.color = "green";
    correctLabel.style.fontWeight = "bold";

    //check answer, inform user and add points
    if (formdata.get('selection') == questions[index].answer) {
        points++

        resultText.textContent = "Oikein!"
        resultText.style.color = "green"
        resultText.style.fontSize = '1.2em'

    } else {
        const selectedInputId = optionsInputs.find(input => input.checked).id;
        const incorrectLabel = document.querySelector(`label[for="${selectedInputId}"]`);
        incorrectLabel.style.color = "red";
        incorrectLabel.style.fontWeight = "bold";

        resultText.textContent = "Väärin meni! Oikea vastaus: " + questions[index].answer
        resultText.style.color = "red"
        resultText.style.fontSize = '1.2em'
    }

    // add index, check if new question or result screen
    index++
        
    if (index <= questions.length-1) {
        setTimeout(showQuestion,3000)
    } else {
        addPoints()
        setTimeout(showResultScreen,3000)
    }

}

// add points to sessionStorage
function addPoints() {
    sessionStorage.setItem('kasvikisailuScore', points.toString())
    sessionStorage.setItem('kasvikisailuMaxScore', questions.length.toString())
}

// show results and "kasvititteli" based on results
function showResultScreen() {
    const quizScreen = document.getElementById('quiz-screen')
    const resultScreen = document.getElementById('result-screen')
    const totalQuestions = questions.length;
    const buttonStartAgain = document.getElementById('start-again')

    quizScreen.classList.add("d-none");
    resultScreen.classList.remove("d-none");

    document.getElementById('userScore').textContent = points
    document.getElementById('maxScore').textContent = questions.length

    let scoreName = document.getElementById('userScoreName')
    
    if (points <= 3) {
        scoreName.textContent = "Kasvinoviisi"
    } else if (points > 3 && points <= 6) {
        scoreName.textContent = "Kasviharrastelija"
    } else if (points > 6 && points < 10) {
        scoreName.textContent = "Kasvitietäjä"
    } else if (points === 10) {
        scoreName.textContent = "Kasvikuningas"
    }

    // start again -button for new game, ask user to confirm
    document.getElementById('start-again').addEventListener('click', () => {
        if (window.confirm("Haluatko varmasti aloittaa alusta? Menetät kaikki tähän asti ansaitut pisteet.")) {
            points = 0;
            index = 0;
    
            document.getElementById('quiz-screen').classList.remove('d-none');
            document.getElementById('result-screen').classList.add('d-none');
    
            showQuestion();
        }
    });


}





