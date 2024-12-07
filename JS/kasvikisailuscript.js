
// quiz screen elements
let questionTitle = document.querySelector('question-title')
let result = document.getElementById('result')
let questions = [
    {
        question: "1. Mikä puu tuottaa pieniä, punaisia marjoja, ja se on yleinen pihan koristekasvi?",
        options: ["Pihlaja", "Koivu", "Tammi", "Vaahtera"],
        answer: "Pihlaja"
    },
    {
        question: "2. Mikä on yhteyttämisen toinen nimitys?",
        options: ["Kasvukierto", "Fotosynteesi", "Haihtuminen", "Lehtivihreä"],
        answer: "Fotosynteesi"
    },
    {
        question: "3. Mikä seuraavista puista tuottaa käpyjä?",
        options: ["Koivu", "Mänty", "Pihlaja", "Vaahtera"],
        answer: "Mänty"
    },
    {
        question: "4. Mikä siemenen alkiosta kehittyy?",
        options: ["Kukka", "Hedelmä", "Taimi", "Juuri"],
        answer: "Taimi"
    },
    {
        question: "5. Mitä on tuulipölytys?",
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
        question: "9. Mitä tarkoittaa kasvin talvehtiminen?",
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
let index = 0;

questionTitle.textContent = questions[index].question



document.getElementById('question-form').addEventListener('submit', checkAnswer)


function checkAnswer(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    if (formData.get('selection') == quizData[index].answer){
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
        result.textContent = "";

        let inputs = document.querySelectorAll('input[name="selection"]')
        inputs.forEach(input=> input.checked = false)
    }

    questionTitle.classList.remove('correct', 'incorrect')
    document.getElementById('answer').disabled = false
}


// let counter = 0;

// let sessionCounter = sessionStorage.getItem('counter');

// if (sessionCounter) {
//     counter = Number(sessionCounter);
// }


