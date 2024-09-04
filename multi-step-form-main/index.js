let sliderEl = document.querySelector('.slider')
let monthEl = document.querySelector('.month')
let yearEl = document.querySelector('.year')

function automateSlide() {
	sliderEl.classList.toggle('active')

	if (sliderEl.classList.contains('active')){
		yearEl.classList.add('time-plan')
		monthEl.classList.remove('time-plan')
	} else {
		yearEl.classList.remove('time-plan')
		monthEl.classList.add('time-plan')
	}
}
