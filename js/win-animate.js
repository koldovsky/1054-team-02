const runText = document.getElementById("runText");
const totalDuration = 4000;

runText.onclick = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    let timeLeft = totalDuration - timePassed;

    if (timePassed < totalDuration / 2) {
      runText.style.left = timePassed / 5 + "px";
    } else {
      runText.style.left = timeLeft / 5 + "px";
    }
    if (timePassed > totalDuration) clearInterval(timer);
  }, 20);
};