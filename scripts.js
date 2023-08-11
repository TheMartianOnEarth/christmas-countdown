
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const daysElLabel = document.getElementById('days-label');
const hoursElLabel = document.getElementById('hours-label');
const minutesElLabel = document.getElementById('minutes-label');
const secondsElLabel = document.getElementById('seconds-label');



//set the date
const ChristmasDate = new Date("Dec 25, 2023 23:00:00").getTime();

let days= 0;
let hours= 0;
let minutes= 0;
let seconds= 0;

//update the count down every 1 second
let x = setInterval(() => {

    //get today's date and time
    let now = new Date().getTime();

    let distance = ChristmasDate - now;
    //time calculations for days, hours, minutes, seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24)); //135days
    hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000*60*60));
    minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60) )
    seconds = Math.floor(distance % (1000 * 60) / (1000))

    updateCountdown();
}, 10); 

const updateCountdown = () => {
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (seconds === 1 || seconds === 0) secondsElLabel.textContent = "second";
    else secondsElLabel.textContent = "seconds"

    if (minutes === 1 || minutes === 0) minutesElLabel.textContent = "minute";
    else minutesElLabel.textContent = "minutes";

    if (hours === 1 || hours === 0) hoursElLabel.textContent = "hour";
    else hoursElLabel.textContent = "hours";

    if (days === 1 || days === 0) daysElLabel.textContent = "day";
    else daysElLabel.textContent = "days";
    
}