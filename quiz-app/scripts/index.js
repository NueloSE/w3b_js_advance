const startBtnEl = document.querySelector(".start-btn")
const ruleCardEl = document.querySelector(".rule-card")
const exitBtnEl = document.querySelector(".exit-btn")
const continueBtnEl = document.querySelector(".continue-btn")
const quizCardEl = document.querySelector(".quiz-card")
const questionCardEl = document.querySelector(".question-card")
const nextBtn = document.querySelector(".next-quiz-btn")
const quizCounter = document.querySelector(".quiz-counter")


startBtnEl.onclick = ()=>{
	ruleCardEl.classList.add("active-page")
}

exitBtnEl.onclick = ()=>{
	ruleCardEl.classList.remove("active-page")
}

continueBtnEl.onclick = ()=>{
	ruleCardEl.classList.remove("active-page")
	quizCardEl.classList.add("active-page")
	showQuestion(0)
	quizCounting(1)
}

let quizCount = 0
let footQuizCount = 1

nextBtn.onclick = ()=>{
	if (quizCount < questions.length - 1) {
		quizCount += 1
		footQuizCount += 1
		showQuestion(quizCount)
		quizCounting(footQuizCount)
	} else {
		console.log('completed quiz')
	}
}

function quizCounting(num){
	quizCounter.innerHTML = '<span><p>'+ num +'</p>of<p>'+ questions.length +'</p>Questions</span>'
}

function showQuestion(index) {
	let quizQuestionEl = document.querySelector(".quiz-question")
	let quizOptionsEl = document.querySelector(".quiz-options")

	let qustn = "<span>"+ questions[index].number+'.'+ questions[index].question +"</span>"
	let optionVal = '<div class="option">'+ questions[index].options[0] +'</div>'
					+ '<div class="option">'+ questions[index].options[1] +'</div>'
					+ '<div class="option">'+ questions[index].options[2] +'</div>'
					+ '<div class="option">'+ questions[index].options[3] +'</div>'

	quizQuestionEl.innerHTML = qustn 
	quizOptionsEl.innerHTML = optionVal

	
}





