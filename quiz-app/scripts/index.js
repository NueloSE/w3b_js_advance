const startBtnEl = document.querySelector(".start-btn")
const ruleCardEl = document.querySelector(".rule-card")
const exitBtnEl = document.querySelector(".exit-btn")
const continueBtnEl = document.querySelector(".continue-btn")
const quizCardEl = document.querySelector(".quiz-card")
const questionCardEl = document.querySelector(".question-card")
const nextBtn = document.querySelector(".next-quiz-btn")
const quizCounter = document.querySelector(".quiz-counter")

const quizQuestionEl = document.querySelector(".quiz-question")
const quizOptionsEl = document.querySelector(".quiz-options")

let tickEl = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossEl = '<div class="icon cross"><i class="fas fa-times"></i></div>';



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

function optionSelected(anwser) {
	let userAns = anwser.textContent;
	let correctAns = questions[quizCount].answer
	let allOptions = quizOptionsEl.children.length;
	
	if (correctAns == userAns){
		anwser.classList.add("correct")
		console.log('correct answer')
		anwser.insertAdjacentHTML("beforeend", tickEl)
	} else {
		anwser.classList.add("incorrect")
		console.log('incorrect answer')
		anwser.insertAdjacentHTML("beforeend", crossEl)

		//automatic select correct answer if wrong answer was selected
		for (let i = 0; i < allOptions; i++) {
			if (quizOptionsEl.children[i].textContent == correctAns){
				quizOptionsEl.children[i].setAttribute("class", "option correct")
				quizOptionsEl.children[i].insertAdjacentHTML("beforeend", tickEl)
			}			
		}
	}

	for (let i = 0; i < allOptions; i++) {
		quizOptionsEl.children[i].classList.add("disabled")
	}
}

function showQuestion(index) {
	let qustn = "<span>"+ questions[index].number+'.'+ questions[index].question +"</span>"
	let optionVal = '<div class="option">'+ questions[index].options[0] +'</div>'
					+ '<div class="option">'+ questions[index].options[1] +'</div>'
					+ '<div class="option">'+ questions[index].options[2] +'</div>'
					+ '<div class="option">'+ questions[index].options[3] +'</div>'

	quizQuestionEl.innerHTML = qustn 
	quizOptionsEl.innerHTML = optionVal
	const optionEl = quizOptionsEl.querySelectorAll(".option")
	for (let i = 0; i < optionEl.length; i++){
		optionEl[i].setAttribute("onclick", "optionSelected(this)")
	}
	
}
