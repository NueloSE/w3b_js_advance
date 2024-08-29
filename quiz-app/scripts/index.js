const startBtnEl = document.querySelector(".start-btn")
const ruleCardEl = document.querySelector(".rule-card")
const exitBtnEl = document.querySelector(".exit-btn")
const continueBtnEl = document.querySelector(".continue-btn")
const quizCardEl = document.querySelector(".quiz-card")
const questionCardEl = document.querySelector(".question-card")
const nextBtn = document.querySelector(".next-quiz-btn")
const quizCounter = document.querySelector(".quiz-counter")
const nextQuizBtn = document.querySelector(".next-quiz-btn button")

const quizQuestionEl = document.querySelector(".quiz-question")
const quizOptionsEl = document.querySelector(".quiz-options")

let tickEl = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossEl = '<div class="icon cross"><i class="fas fa-times"></i></div>';

const quizTimer = document.querySelector(".quiz-secs")
const lineEl = document.querySelector(".line")


const resultEl = document.querySelector(".result")
const restartEl = document.querySelector(".restart")
const quitEl = document.querySelector(".quit")


let quizCount = 0
let footQuizCount = 1
let timeCounter;
let lineCounter;
let score = 0;

restartEl.onclick = ()=>{
	quizCardEl.classList.add("active-page")
	resultEl.classList.remove("active-page")
	resultEl.style.display = "none"

	quizCount = 0
	let footQuizCount = 1
	let timeCounter;
	
	let score = 0;

	showQuestion(quizCount)
	quizCounting(footQuizCount)
	clearInterval(timeCounter)
	clearInterval(lineCounter)
	startTimeCount(15)
	startLineTimer(0)
	nextQuizBtn.style.display = "none"

}

quitEl.onclick = ()=>{
	window.location.reload();
}

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
	startTimeCount(15)
	startLineTimer(0)
}


//when you click next buttion functionality
nextBtn.onclick = ()=>{
	console.log("quiz count is" + quizCount)
	if (quizCount < questions.length - 1) {
		quizCount += 1
		footQuizCount += 1
		showQuestion(quizCount)
		quizCounting(footQuizCount)
		clearInterval(timeCounter)
		clearInterval(lineCounter)
		startTimeCount(15)
		startLineTimer(0)
		nextQuizBtn.style.display = "none"

	} else {
		console.log('completed quiz')
		displayResult()
	}
}


// display result and dynamic result content
function displayResult() {
	quizCardEl.classList.remove("active-page")
	resultEl.classList.add("active-page")
	resultEl.style.display = "flex"
	const scoreText = document.querySelector(".score-text")
	const quizLength = questions.length
	
	if (score > (quizLength * 0.5)) {
		scoreText.innerHTML = '<span>Congrats! You got <p>'+score+'</p> out of <p>'+quizLength+'</p></span>'
	}

	else if (score > (quizLength * 0.3)) {
		scoreText.innerHTML = '<span>and nice, You got <p>'+score+'</p> out of <p>'+quizLength+'</p></span>'
	}

	else {
		scoreText.innerHTML = '<span>and sorry, You got only <p>'+score+'</p> out of <p>'+quizLength+'</p></span>'
	}
}

// line timer
function startLineTimer(time) {
	lineCounter = setInterval(timing, 29)
	function timing(){
		time++
		lineEl.style.width = time + "px"
		if (time > 549){
			clearInterval(lineCounter)
			let correctAns = questions[quizCount].answer
			let allOptions = quizOptionsEl.children.length;
			for (let i = 0; i < allOptions; i++) {
				if (quizOptionsEl.children[i].textContent == correctAns){
					quizOptionsEl.children[i].setAttribute("class", "option correct")
					quizOptionsEl.children[i].insertAdjacentHTML("beforeend", tickEl)
				}			
			}
			nextQuizBtn.style.display = "block"
		}
	}
	
}

//timer
function startTimeCount(timeLeft){
	timeCounter = setInterval(performCount, 1000)

	function performCount() {
		quizTimer.textContent = timeLeft
		timeLeft--

		if (timeLeft < 9){
			quizTimer.textContent = "0" + quizTimer.textContent
		}

		if (timeLeft < 0){
			quizTimer.textContent = "Time out"
			for (let i = 0; i < 4; i++) {
				quizOptionsEl.children[i].classList.add("disabled")
			}
		}
	}
}


function quizCounting(num){
	quizCounter.innerHTML = '<span><p>'+ num +'</p>of<p>'+ questions.length +'</p>Questions</span>'
}

// select option
function optionSelected(anwser) {
	clearInterval(timeCounter)
	clearInterval(lineCounter)
	let userAns = anwser.textContent;
	let correctAns = questions[quizCount].answer
	let allOptions = quizOptionsEl.children.length;
	
	
	if (correctAns == userAns){
		anwser.classList.add("correct")
		anwser.insertAdjacentHTML("beforeend", tickEl)
		score += 1
		console.log(`your current score is: ${score}`)
		console.log('correct answer')
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
	nextQuizBtn.style.display = "block"
}

//display questions
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
