

const score = sessionStorage.getItem('kasvikisailuScore')
const maxScore = sessionStorage.getItem('kasvikisailuMaxScore')

const showScore = document.getElementById('score')
const showMaxScore = document.getElementById('maxScore')

showScore.textContent = score
showMaxScore.textContent = maxScore
