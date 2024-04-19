const boardImage    = new Image();
boardImage.src      = "images/board.png"

const playButton    = document.getElementById("playButton");
const resetButton   = document.getElementById("resetButton");
const display       = document.getElementById("display");
const columnButtons = document.getElementById("columnButtons");
for(let i=0;i<7;i++) {
    let temp = document.createElement("button");
    temp.setAttribute("id","button"+i.toString(10));
    temp.textContent = (i+1).toString(10);
    columnButtons.appendChild(temp);
}
const board          = document.getElementById("board");
board.appendChild(boardImage);

var game = Array(6);
for(let i=0;i<6;i++) {
    game[i].push(Array(7).fill(0));
}

console.log(game);

let status = "Init";

playButton.addEventListener("click", () => {
    try {
        status = "Playing";
        update();
        playButton.disabled = true;
    } catch(err) {
        alert(err.message);
    }
});

resetButton.addEventListener("click", () => {
    try {
        status = "Init";
        update();
        playButton.disabled = false;
    } catch(err) {
        alert(err.message);
    }
});

function update() {
    display.innerHTML = "--- "+status+" ---";
}

function disablePlayButton() {
    playButton.disabled = true;
}

/** Column choice must be int 1-7 */
function dropDisc(column) {
    game
}
