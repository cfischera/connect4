const playButton    = document.getElementById("playButton");
const resetButton   = document.getElementById("resetButton");
const display       = document.getElementById("display");
const columnButtons = document.getElementById("columnButtons");

for(let i=0;i<7;i++) {
    let temp = document.createElement("button");
    temp.setAttribute("id", "button"+i.toString(10));
    temp.textContent = (i+1).toString(10);
    temp.disabled = true;
    columnButtons.appendChild(temp);
}

const board         = document.getElementById("board");

for(let i=0;i<6;i++) {
    for(let j=0;j<7;j++) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "cell");
        temp.setAttribute("id", "cell"+i.toString(10)+j.toString(10));
        board.appendChild(temp);
    }
}

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
        game = Array();
        for(let i=0;i<6;i++) {
            game.push(Array(7).fill(0));
        }
        for(let i=0;i<6;i++) {
            for(let j=0;j<7;j++) {
                document.getElementById("cell"+i+j).style.backgroundColor = "#000000";
            }
        }
    } catch(err) {
        alert(err.message);
    }
});

function update() {
    display.innerHTML = "--- "+status+" ---";
}

/**
 * column must be int 0-6
 * player must be int 1 or 2
 */
function dropDisc(c) {
    let column = game.map((x) => x[c]);
    let r = column.lastIndexOf(0);
    console.log("c = "+c);
    console.log("r = "+r);
    game[r][c] = player;
    document.getElementById("cell"+r+c).style.backgroundColor = player==1 ? "#ff0000" : "#0000ff";
    if(r==0) {
        document.getElementById("button"+c).disabled = true;
    }
    if(checkWin(r,c) > 0) {
        status = ("WINNER: Player "+player);
        disableColumnButtons(true);
    } else {
        player = 3-player;
        status = "Player "+player+"'s Turn";
    }
    update();
    console.log("game[r][c] = "+game[r][c]);
}

function disableColumnButtons(flag) {
    for(let i=0;i<7;i++) {
        let t = document.getElementById("button"+i);
        t.disabled = flag;
    }
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

/**
 * return winning player (1,2) or 0 for neither
 */
function checkWin(posR, posC) {
    let dif = posR-posC;
    let sum = posR+posC;

    var possibleWins = new Array();

    possibleWins.push(game.map((x) => x[posC]).toString().split(",").join("")); // column
    possibleWins.push(game[posR].toString().split(",").join("")); // row
    possibleWins.push(""); // left diagonal
    possibleWins.push(""); // right diagonal

    for(let i=0;i<game.length;i++) {
        for(let j=0;j<game[i].length;+j++) {
            if(i-j == dif)
                possibleWins[2] += game[i][j].toString();
            if(i+j == sum)
                possibleWins[3] += game[i][j].toString();
        }
    }

    console.log(player);
    console.log(possibleWins);
    

    for(let x of possibleWins) {
        if(x.includes("1111"))
            return 1;
        else if(x.includes("2222"))
            return 2;
    } return 0;
}
