/* Villivisailu-tietovisan toiminnallisuus (JavaScript) on toteutettu tekoälyavusteisesti käyttäen ChatGPT:tä (OpenAI, 2024). */
/* Muut lähteet: */
/* https://www.sitepoint.com/simple-javascript-quiz/ Yaphi Berhanu, James Hibbard, Sitepoint, How to Make a Simple JavaScript Quiz */

let currentQuestionIndex = 0; /* Kysymysindeksi alussa nolla; pitää kirjaa siitä mikä kysymys näytetään. */
let userAnswers = []; /* Käyttäjän vastaukset-taulukko, alussa tyhjä. */

/* Tehdään kysymyksistä taulukko, joka sisältää useita arvoja: objekteja, jotka sisältää useita avain-arvo-pareja: */
let questions = [
    {
        question: "Mikä kasvi tämä on?",
        correct_answer: "Mustikka",
        incorrect_answers: ["Puolukka", "Lakka", "Ruska"],
        image: "../IMG/villivisailukuvat/marjat.jpg"
    },
    {
        question: "Mikä lintu tässä on?",
        correct_answer: "Varis",
        incorrect_answers: ["Kottarainen", "Tiira", "Mustarastas"],
        image: "../IMG/villivisailukuvat/lintu.jpg"
    },
    {
        question: "Mikä puulaji tässä on?",
        correct_answer: "Mänty",
        incorrect_answers: ["Lehtikuusi", "Kuusi", "Koivu"],
        image: "../IMG/villivisailukuvat/puita.jpg"
    },
    {
        question: "Minkä eläimen jälkiä tässä on?",
        correct_answer: "Karhun",
        incorrect_answers: ["Supikoiran", "Hirven", "Suden"],
        image: "../IMG/villivisailukuvat/jaljet.jpg"
    },
    {
        question: "Mikä lintu tässä on?",
        correct_answer: "Talitiainen",
        incorrect_answers: ["Kottarainen", "Västäräkki", "Pääskynen"],
        image: "../IMG/villivisailukuvat/pikkulintu.jpg"
    },
    {
        question: "Mikä myrkyllinen sieni tämä on?",
        correct_answer: "Kärpässieni",
        incorrect_answers: ["Koivunkantosieni", "Valkokärpässieni", "Kavala seitikki"],
        image: "../IMG/villivisailukuvat/sieni.jpg"
    },
    {
        question: "Mikä haitallinen vieras kasvilaji tässä on?",
        correct_answer: "Lupiini",
        incorrect_answers: ["Koiranputki", "Ketoneilikka", "Vuohenputki"],
        image: "../IMG/villivisailukuvat/kukka.jpg"
    },
    {
        question: "Mikä hämähäkkieläin tässä on?",
        correct_answer: "Puutiainen",
        incorrect_answers: ["Mustaleski", "Keltiäinen", "Vesihämähäkki"],
        image: "../IMG/villivisailukuvat/hamppis.webp"
    },
    {
        question: "Mikä maaperä esiintyy kuvassa?",
        correct_answer: "Suo",
        incorrect_answers: ["Moreenimaa", "Karukkokangas", "Lehtomaa"],
        image: "../IMG/villivisailukuvat/maasto.jpg"
    },
    {
        question: "Mikä prosessi tapahtuu, kun vesihöyry tiivistyy ilmakehässä ja muodostaa pilviä?",
        correct_answer: "Kondensaatio",
        incorrect_answers: ["Sateen muodostuminen", "Haihtuminen", "Vuorovesi"],
        image: "../IMG/villivisailukuvat/maisema.jpg"
    }
];

/* Funktio joka näyttää kysymyksen: */
function showQuestion() {
    const question = questions[currentQuestionIndex]; /* Valitaan questions-taulukosta oikea kysymys indeksimuuttujan avulla. */
    /* Määritellään muuttujat ja haetaan niiden viittaukset getElementById:llä, jotta niiden sisältöä voidaan muuttaa: */
    const questionTitle = document.getElementById("question-title");
    const answersContainer = document.getElementById("answers-container");
    const questionImage = document.getElementById("question-image");

    /* Asetetaan kysymykseen oikea teksti ja kuva: */
    questionTitle.textContent = question.question;
    questionImage.src = question.image;

    /* Tyhjentää aiemmat vastaukset: */
    answersContainer.innerHTML = '';

    /* Lisätään oikea vastaus ja väärät vaihtoehdot ja sekoitetaan taulukko kutsumalla shuffleArrayta: */
    /* ... eli spread-syntaksi levittää taulukon yksittäisiksi arvoiksi. */
    let answers = [question.correct_answer, ...question.incorrect_answers];
    answers = shuffleArray(answers);

    answers.forEach(answer => {
        const button = document.createElement("button"); /* Luodaan button muistiin. */
        button.classList.add("answer-button"); /* Lisätään buttonille luokka. */
        button.textContent = answer; /* Lisätään buttoniin vastausvaihtoehto. */
        button.onclick = () => checkAnswer(answer); /* Kutsutaan checkAnswer-funktiota ja lähetetään sille parametrina käyttäjän klikkaama vastaus tarkistettavaksi. */
        answersContainer.appendChild(button); /* Lisätään button osaksi answerContainer-elementtiä, jolloin se tulee näkyväksi sivuilla. */
    });
}

/* Sekoitusfunktio vastauksille: */
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* Vastauksen tarkistus ja merkki oikeasta/väärästä: */
function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex]; /* Haetaan nykyinen kysymys taulukosta indeksin avulla. */
    const buttons = document.querySelectorAll(".answer-button"); /* Haetaan vastauspainikkeet. */

    /* Käydään läpi kaikki vastauspainikkeet forEach-silmukalla: */
    buttons.forEach(button => {
        if (button.textContent === question.correct_answer) {
            button.classList.add("correct"); /* Lisätään vihreä väri (correct-luokka) painikkeeseen, jos se vastaa oikeaa vastausta. */
        }
        if (button.textContent === selectedAnswer && selectedAnswer !== question.correct_answer) {
            button.classList.add("incorrect"); /* Väärä vastaus niin punainen. */
        }
        button.disabled = true; /* Muut button-elementit poistetaan käytöstä tällä ominaisuudella, jotta käyttäjä ei voi valita montaa. */
    });

    /* Tallennetaan push-menetelmällä käyttäjän vastaus userAnswers-taulukon loppuun: */
    /* Vastaus on olio avain-arvopareilla. */
    userAnswers.push({
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correct_answer,
        isCorrect: selectedAnswer === question.correct_answer
    });

    /* Odotetaan hetki ennen uuden kysymyksen näyttämistä: */
    /* Käytetään tässä hyödyksi JavaScriptin sisäänrakennettua setTimeout-funktiota: */
    setTimeout(() => {
        currentQuestionIndex++; /* Kasvatetaan kysymyksen indeksilukua yhdellä. */
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz(); // Pelin lopetus.
        }
    }, 1000); /* 1000 millisekuntia. */
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultSummary = document.getElementById("result-summary");
    const scoreElement = document.getElementById("score");
    const resultBox = document.getElementById("result-box");

    quizContainer.classList.add("d-none"); /* Piilotetaan kysymykset. */
    resultSummary.classList.remove("d-none"); /* Näytetään yhteenveto. */

    /* Lasketaan pisteet: */
    const score = userAnswers.filter(answer => answer.isCorrect).length;
    scoreElement.textContent = `Sait ${score} pistettä ${questions.length} pisteestä!`;

    /* Tyhjennetään tuloslaatikko ja lisätään käyttäjän vastaukset. */
    resultBox.innerHTML = ""; /* Tyhjentää aiemmat sisällöt, jos funktiota kutsutaan uudelleen. */
    userAnswers.forEach((answer, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item"); /* Lisätään tyyliluokka. */

        resultItem.innerHTML = `
            <p><strong>Kysymys ${index + 1}:</strong> ${answer.question}</p>
            <p><strong>Vastauksesi:</strong> ${answer.selectedAnswer}</p>
            <p><strong>Oikea vastaus:</strong> ${answer.correctAnswer}</p>
        `;

        // Lisätään yksittäinen kysymyslaatikko tuloslaatikkoon:
        resultBox.appendChild(resultItem);
    });
}

showQuestion(); /* Käynnistetään peli kutsumalla funktiota. */