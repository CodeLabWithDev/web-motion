document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startTimerBtn");
  const stopBtn = document.getElementById("stopTimerBtn");

  let timerInterval = null;
  let startTime = null;

  startBtn.addEventListener("click", () => {
    if (timerInterval) return;

    startTime = Date.now();
    console.log("Timer started!");

    timerInterval = setInterval(() => {
      const elapsedMs = Date.now() - startTime;
      const elapsedSeconds = Math.floor(elapsedMs / 1000);
      console.log(`Elapsed time: ${elapsedSeconds} seconds`);
    }, 1000);

    // toggle buttons
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
  });

  stopBtn.addEventListener("click", () => {
    if (!timerInterval) return; // not running

    clearInterval(timerInterval);
    timerInterval = null;

    const totalElapsedMs = Date.now() - startTime;
    const totalElapsedSeconds = Math.floor(totalElapsedMs / 1000);
    console.log(`Timer stopped. Total time: ${totalElapsedSeconds} seconds`);

    // toggle buttons
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
  });
});
