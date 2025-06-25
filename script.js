//CREATING A STOPWATCH USING JS 

const timerDisplay = document.querySelector("#timerDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTIme = 0;
let elapsedTIme = 0;
let currentTIme = 0;
let paused = true;

let intervalId;
let hour = 0;
let minute = 0;
let second = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTIme = Date.now() - elapsedTIme;
        intervalId = setInterval(updateTime, 500);

    }
});
pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused = true;
        elapsedTIme = Date.now() - startTIme;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalId);
    
    startTIme = 0;
    elapsedTIme = 0;
    currentTIme = 0;

    hour = 0;
    minute = 0;
    second = 0;

    timerDisplay.textContent = `00:00:00`;

});


function updateTime(){
    let msForOneSec = 1000;     // millisecond for 1 second; 1000ms makes 1 second
    let msforOneMin = msForOneSec * 60     //  millisecond for 1 minute; 60,000ms makes 1 minute
    let msforOneHr = msforOneMin * 60 * 60   //  millisecond for 1 hour; 3,600,000ms makes 1 hour
    
    elapsedTIme = Date.now() - startTIme;

    second = Math.floor((elapsedTIme / (msForOneSec)) % 60);
    minute = Math.floor((elapsedTIme / (msforOneMin)) % 60);
    hour = Math.floor((elapsedTIme / (msforOneHr)) % 60);


    //padding with a prefix of 0 for single digit numbers like 0-9
    second = pad(second);
    minute = pad(minute);
    hour = pad(hour);

    timerDisplay.textContent = `${hour}:${minute}:${second}`;


    function pad(unit){
        return (("0" + unit).length > 2? unit : "0" + unit);
    }
}