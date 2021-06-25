const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const div1 = document.querySelector('.div1');

const secondsFill = document.getElementById('seconds--fill');
const hoursFill = document.getElementById('hours--fill');
const minutesFill = document.getElementById('minutes--fill');

const secondBlock = `<div class='second--block'></div>`;

const minuteBlock = `<div class='minute--block'></div>`;
const hourBlock = `<div class='hour--block'></div>`;
const secondBlockBlank = `<div class='second--block--blank'></div>`;
const minuteBlockBlank = `<div class='minute--block--blank'></div>`;

const hourBlockBlank = `<div class='hour--block--blank'></div>`;

const secsLabel = document.getElementById('secs');
const minsLabel = document.getElementById('mins');
const hoursLabel = document.getElementById('hrs');

const root = document.documentElement;
const html = document.querySelector('html');

secondsFill.innerHTML = secondBlockBlank.repeat(60);
minutesFill.innerHTML = minuteBlockBlank.repeat(60);
hoursFill.innerHTML = hourBlockBlank.repeat(24);

function getSecs() {
	const time = new Date();
	const secs = time.getSeconds();
	return secs;
}

function getMins() {
	const time = new Date();
	const mins = time.getMinutes();
	return mins;
}

function getHour() {
	const time = new Date();
	const hours = time.getHours();
	return hours;
}

function changeSecs() {
	setInterval(() => {
		secsLabel.textContent = `${getSecs()} SEC(S)`;
	}, 100);
}

function changeMins() {
	setInterval(() => {
		minsLabel.textContent = `${getMins()} MIN(S)`;
	}, 100);
}

function changeHours() {
	setInterval(() => {
		hoursLabel.textContent = `${getHour()} HRS(S)`;
	}, 100);
}

changeSecs();
changeMins();
changeHours();

function getTime() {
	const time = new Date();
	const sec = time.getSeconds();
	const min = time.getMinutes();
	const hr = time.getHours();
	seconds.innerHTML = secondBlock.repeat(sec);
	minutes.innerHTML = minuteBlock.repeat(min);
	hours.innerHTML = hourBlock.repeat(hr);
}

setInterval(getTime, 100);

html.addEventListener('click', function(e) {
	if (root.style.getPropertyValue('--bg-color') === '#1e004e') {
		root.style.setProperty('--bg-color', '#4e0000');
		root.style.setProperty('--block-color', '#851b00');
		root.style.setProperty('--blank-block-color', 'rgb(119, 4, 0)');
	} else {
		root.style.setProperty('--bg-color', '#1e004e');
		root.style.setProperty('--block-color', '#632aeb');
		root.style.setProperty('--blank-block-color', 'rgb(66, 0, 151)');
	}
});
