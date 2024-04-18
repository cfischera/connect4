/** JS script for connect 4
  * First to make a playable connect 4 board and game
  * Then minimax algo to make a connect 4 bot
  */

const playButton = document.getElementById("playButton");
const display    = document.getElementById("display");

playButton.addEventListener("click", function() {
    try {
        display.innerHTML = "--- Play Button Activated ---";
    } catch(err) {
        alert(err.message);
    }
});
