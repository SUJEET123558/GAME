let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newgame");
let trun0 = true;
let count = 0; // for draw condition

let winnerPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = trun0 ? "x" : "o";
        trun0 = !trun0;
        box.disabled = true;
        count++;
        checkWinner();
    });
});

let showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

let checkWinner = () => {
    for (let pattern of winnerPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxs[a].innerText;
        let val2 = boxs[b].innerText;
        let val3 = boxs[c].innerText;

        if (val1 && val1 === val2 && val2 === val3) {
            boxs.forEach(box => box.disabled = true);
            showWinner(val1);
            return;
        }
    }

    // Draw condition
    if (count === 9) {
        msg.innerText = "😐 It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};

// New Game and Reset functionality
const enableBoxes = () => {
    boxs.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};

const resetGame = () => {
    trun0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
