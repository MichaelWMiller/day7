var statWin = "YOU WIN!!";
var statTie = "A Tie!!";
var statLose = "YOU LOSE!";

function showStatus(stat) {
    document.getElementById('gameStatus').textContent = stat;
}


function play(choice) {
    document.getElementById('gameStatus').textContent = "";
    var pcChoice = getChoice();
    document.getElementById("gameChoice").textContent = pcChoice;

    if (pcChoice == "rock") {
        if (choice == "rock") {
            showStatus(statTie);
            return;
        }
        if (choice == "paper") {
            showStatus(statLose)
            return;
        }
        if (choice == "scissors") {
            showStatus(statLose)
            return;
        }
    }
    if (pcChoice = "paper") {
        if (choice == "rock") {
            showStatus(statWin);
            return;
        }
        if (choice == "paper") {
            showStatus(statTie);
            return;
        }
        if (choice == "scissors") {
            showStatus(statWin);
            return;
        }
    }
    if (pcChoice = "scissors") {
        if (choice == "rock") {
            showStatus(statWin);
            return;
        }
        if (choice == "paper") {
            showStatus(statLose);
            return;
        }
        if (choice == "scissors") {
            showStatus(statTie);
            return;
        }
    }

}

function newGame() {
    document.getElementById("gameChoice").textContent = "";
    document.getElementById("gameStatus").textContent = ". . .";
}

function getChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var choice = "";
    var index = Math.floor(Math.random() * 3);
    choice = choices[index];
    return choice;
}