
let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
const resetbtn = document.querySelector(".resetbtn")
const Newgamebtn = document.querySelector(".New-Game")
const Showgamebtn = document.querySelector(".show-Game")
const gamecont = document.querySelector(".game-container")


let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];






boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
            box.style.color = "red";
        } else {
            box.innerText = "X"
            turnO = true;
            box.style.color = "#8CC0EB";
        }
        box.disabled = true;
        checkwin();

        attemts++;
        if (attemts === 9) {
            gamedraw()
        }

    }

    )
}
)

let hide = () => {
    gamecont.classList.add("hide")
    resetbtn.classList.add("hide")
    msg.classList.remove("hide")
    Newgamebtn.classList.remove("hide")
    Showgamebtn.classList.remove("hide")
}


let gamedraw = () => {
    attemts = 0;
    hide()
    msg.innerText = `Game is Draw`;

}



let attemts = 0;

let checkwin = () => {
    for (const pattern of winPatterns) {
        pos1 = boxes[pattern[0]].innerText
        pos2 = boxes[pattern[1]].innerText
        pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                attemts = 0;
                hide()
                msg.innerText = `Winner is Player ${pos1}`;
            }

        }

    }

}


resetbtn.addEventListener("click", (envt) => {
    for (const box of boxes) {
        attemts = 0;
        box.innerText = "";
        box.disabled = false;
    }
}
)


Newgamebtn.addEventListener("click", (e) => {
    gamecont.classList.remove("hide")
    resetbtn.classList.remove("hide")
    msg.classList.add("hide")
    Newgamebtn.classList.add("hide")
    Showgamebtn.classList.add("hide")
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

}
)


Showgamebtn.addEventListener("click", (e) => {
    gamecont.classList.remove("hide")
    Showgamebtn.classList.add("hide")
    for (const box of boxes) {
        box.disabled = true;
    }

}
)




