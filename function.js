// Function to create and style the countdown timer element
function createTimerElement() {
    let timerDiv = document.createElement('div');
    timerDiv.id = 'countdownTimer';
    timerDiv.style.position = 'absolute';
    timerDiv.style.top = '0';
    timerDiv.style.left = '0';
    timerDiv.style.width = '100%';
    timerDiv.style.height = '2px';
    timerDiv.style.backgroundColor = 'green';
    timerDiv.style.transition = 'width 1s linear';
    timerDiv.style.zIndex="9999"

    document.body.appendChild(timerDiv);

    return timerDiv;
}


function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let remainingPercentage = (timer / duration) * 100;
        display.style.width = remainingPercentage + '%';
        console.log(remainingPercentage);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    let duration = 60 * 30;
    let display = createTimerElement();
    console.log("sthsth");
    startCountdown(duration, display);
};
