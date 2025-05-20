function resetDay(dayId) {
    const container = document.getElementById(dayId);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(box => box.checked = false);
}
let timerDuration = 0;
let timerInterval = null;

function setTimer(seconds) {
    timerDuration = seconds;
    updateTimerDisplay(timerDuration);
    resetTimer(); // Stop any existing countdown
}

function startTimer() {
    if (timerInterval !== null) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time's up!");
        } else {
            timerDuration--;
            updateTimerDisplay(timerDuration);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    updateTimerDisplay(timerDuration);
}

function updateTimerDisplay(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${mins}:${secs}`;
}
