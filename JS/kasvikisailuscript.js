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

function showQuestion() {
    questionTitle.classList.remove('correct', 'incorrect')

    document.getElementById('result').textContent = ''

    const question = questions[index]

    questionTitle.textContent = question.question

    question.options.forEach((option, i) => {
        optionsLabels[i].textContent = option // Päivitä label
        optionsInputs[i].value = option    // Päivitä value
        optionsInputs[i].checked = false; // Nollaa valinnat
        optionsLabels[i].style.color = "";

    })

    nextButton.disabled = false

}


document.getElementById('question-form').addEventListener('submit', checkAnswer)


function checkAnswer(event) {

    event.preventDefault();
    let formdata = new FormData(event.currentTarget)

    if (!formdata.get('selection')) {
        alertText.textContent = "ei valittu"
        alertText.style.color = "red"

        setTimeout(() => {
            alertText.textContent = "";
        }, 1000)
            return
    }

    if (index < questions.length) {
        nextButton.disabled = true

        if (formdata.get('selection') == questions[index].answer) {
            points++
            questionTitle.classList.add('correct')
            console.log('points++')

            resultText.textContent = "Oikein!"
            resultText.style.color = "green"

        } else {
            questionTitle.classList.add('incorrect')
            console.log('no points')

            resultText.textContent = "Väärin! Oikea vastaus: " + questions[index].answer
            resultText.style.color = "red"
        }

        

        index++

        
        setTimeout(showQuestion,2000)
    } else {
        showEndscreen()
    }

}

function addPoints() {
    sessionStorage.setItem('kasvikisailuScore', points.toString())
}


