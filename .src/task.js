const session = document.getElementById("session");
const time = document.querySelector(".timer-container")
session.addEventListener("click", ()=>{
 time.style.display = "flex";
 
})


const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer h1");


let totalTime = 25 * 60;
let interval = null;

start.addEventListener("click", () => {

    interval = setInterval(() => {
        if (totalTime > 0) {
            totalTime--;
            timer.textContent = totalTime + "s";
        }
        else {
            clearInterval(interval);
            interval = null;
            alert('Time is up! ⏰');
        }
    }, 1000);

});
reset.addEventListener("click", () => {
    clearInterval(interval);
    timer.textContent = "20:00";
    interval = null;

});