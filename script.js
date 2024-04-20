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
    temp.disabled = true;
    columnButtons.appendChild(temp);
}
const board         = document.getElementById("board");
board.appendChild(boardImage);

var game = Array();
for(let i=0;i<6;i++) {
    game.push(Array(7).fill(0));
}

let status = "Init";

let player = 1;

playButton.addEventListener("click", () => {
    try {
        disableColumnButtons(false);
        player = 1;
        playButton.disabled = true;
        status = "Player "+player+"'s Turn";
        update();
    } catch(err) {
        alert(err.message);
    }
});

resetButton.addEventListener("click", () => {
    try {
        status = "Init";
        disableColumnButtons(true);
        update();
        playButton.disabled = false;
    } catch(err) {
        alert(err.message);
    }
});

function update() {
    drawDiscs();
    display.innerHTML = "--- "+status+" ---";
}

/**
 * column must be int 0-6
 * player must be int 1 or -1
 */
function dropDisc(column) {
    let c = game.map((r) => r[column]);
    let r = c.lastIndexOf(0);
    game[r][c] = player;
    if(r==0) {
        document.getElementById("button"+i).disabled = true;
    }
    player = player+1%2;
    status = "Player "+player+"'s Turn";
    update();
}

function disableColumnButtons(flag) {
    for(let i=0;i<7;i++) {
        let t = document.getElementById("button"+i);
        t.disabled = flag;
    }
}

function drawDiscs() {

}

document.getElementById("button0").addEventListener("click", () => {
    try {
        dropDisc(0);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button1").addEventListener("click", () => {
    try {
        dropDisc(1);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button2").addEventListener("click", () => {
    try {
        dropDisc(2);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button3").addEventListener("click", () => {
    try {
        dropDisc(3);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button4").addEventListener("click", () => {
    try {
        dropDisc(4);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button5").addEventListener("click", () => {
    try {
        dropDisc(5);
    } catch(err) {
        alert(err.message);
    }
});
document.getElementById("button6").addEventListener("click", () => {
    try {
        dropDisc(6);
    } catch(err) {
        alert(err.message);
    }
});
