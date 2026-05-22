let userpoints = 0;
let comppoints = 0;

let msg = document.querySelector(".result-message");
let choices = document.querySelectorAll(".choice");
let upoints = document.querySelector("#userpoints");
let cpoints = document.querySelector("#computerpoints");
let comchoice = document.querySelector("#com");
let clear = document.querySelector(".clear-btn");

function compchoice() {
    let options = ["rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
}

function playgame(userchoice) {

    const computerchoice = compchoice();

    if (computerchoice == userchoice) {
        msg.textContent = "Its a Draw";
    }
    else if (
        userchoice == "rock" && computerchoice == "scissors" ||
        userchoice == "paper" && computerchoice == "rock" ||
        userchoice == "scissors" && computerchoice == "paper"
    ) {
        msg.textContent = "Congrats You win";
        userpoints++;
    }
    else {
        msg.textContent = "Computer win";
        comppoints++;
    }

    upoints.textContent = userpoints;
    cpoints.textContent = comppoints;
    comchoice.textContent = `Computer choose ${computerchoice}`;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

clear.addEventListener("click", () => {
    msg.textContent = "Make your turn first";

    userpoints = 0;
    comppoints = 0;

    upoints.textContent = 0;
    cpoints.textContent = 0;
    comchoice.textContent = "";
});