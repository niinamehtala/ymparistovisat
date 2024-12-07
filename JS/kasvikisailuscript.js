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

    })

    nextButton.disabled = false

}


document.getElementById('question-form').addEventListener('submit', checkAnswer)


function checkAnswer(event) {

    nextButton.disabled = true

    event.preventDefault();
    let formData = new FormData(event.currentTarget)

    if (formData.get('selection') == questions[index].answer) {
        points++
        questionTitle.classList.add('correct')
    } else {
        questionTitle.classList.add('incorrect')
    }

    document.getElementById('result').textContent = 
        "teksti";

    index++

    
   setTimeout(showQuestion,2000)
    

}

// function checkAnswer(event) {
//     event.preventDefault();
//     let formData = new FormData(event.currentTarget);

//     if (formData.get('selection') == quizData[index].answer){
//         points++
//         questionTitle.classList.add('correct')
//     }else {
//         questionTitle.classList.add('incorrect')

//     }

//     result.textContent = "Tähän oikea vastaus"
//     nextQuestion()

//     setTimeout(nextQuestion, 1000)

// }

// document.getElementById('question-form').addEventListener('submit', (e) => {
//     e.preventDefault(); // Estä lomakkeen lähetys

//     // Tarkista valinta
//     const selectedOption = document.querySelector('input[name="selection"]:checked');
//     if (selectedOption) {
//         const userAnswer = selectedOption.value;
//         const correctAnswer = questions[currentIndex].answer;

//         if (userAnswer === correctAnswer) {
//             alert("Oikein!");
//         } else {
//             alert("Väärin!");
//         }

//         // Siirry seuraavaan kysymykseen
//         index++;
//         if (currentIndex < questions.length) {
//             showQuestion();
//         } else {
//             alert("Visailu päättyi!");
//         }
//     } else {
//         alert("Valitse vastaus ennen jatkamista!");
//     }
// });



