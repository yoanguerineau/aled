//returns values between 1 and max
function getRandomInt(max){
	return Math.floor(Math.random()*Math.floor(max))+1;
}

function format(num){
	return num <10 ? (`0${num}`) : num;
}

//selecting background randomly, change the following const to add files
const pic_nb = 6;
document.body.style.backgroundImage = `url('./background_pictures/${getRandomInt(pic_nb)}.jpg')`;

//picking elements that might need to be modified
const eventElem = document.getElementById("event");
const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

const currentDate = new Date();

//picking parameters from the URL
const params = new URLSearchParams(window.location.search);
var date = new Date(params.get('date'));
date = new Date(date.getFullYear(),date.getMonth(),date.getDate());
var event = params.get('event');

//checking if everything is correct, if not, setting stuff to new years eve
if(date.toString() == "Invalid Date" || event == "" || date.getTime() <= currentDate.getTime()){
	date = new Date((new Date()).getFullYear()+1,0,1);
	event = "New Years Eve";
}
eventElem.innerHTML = event;

function timer() {
	const currentDate = new Date();
	const offset = Math.abs(date.getTimezoneOffset())-Math.abs(currentDate.getTimezoneOffset());
	const totalSeconds = Math.floor((date-currentDate)/1000)+offset*60;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600 % 24);
	const minutes = Math.floor(totalSeconds / 60  % 60);
	const seconds = Math.floor(totalSeconds % 60);
	
	daysElem.innerHTML = days;
	hoursElem.innerHTML = format(hours);
	minutesElem.innerHTML = format(minutes);
	secondsElem.innerHTML = format(seconds);
}

//first call to set things up
timer();

setInterval(timer,1000);
