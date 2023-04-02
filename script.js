
const daysEl = document.getElementById("days");
const hoursEl =document.getElementById("hours"); 
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthDay = "12 Mar 2024";

function countdown(){
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (birthDayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
// calling the function.
countdown();
setInterval(countdown,1000);

