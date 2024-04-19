const boardImage = new Image();
boardImage.src = "images/board.png"

const playButton    = document.getElementById("playButton");
const display       = document.getElementById("display");
const columnButtons = document.getElementById("columnButtons");
for(let i=0;i<7;i++) {
    let temp = document.createElement("button");
    temp.textContent = i;
    columnButtons.appendChild(temp);
}
const board         = document.getElementById("board");
board.appendChild(boardImage);



let status = "Init";

playButton.addEventListener("click", () => {
    try {
        status = "Playing";
        update();
    } catch(err) {
        alert(err.message);
    }
});

function update() {
    display.innerHTML = "--- "+status+" ---";
}
