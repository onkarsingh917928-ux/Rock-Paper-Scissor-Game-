let UserScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const optaions = ["rock" ,"paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return optaions[randIdx];
};

const DramGame = () => {
    msg.innerText = "Game was draw ! Play again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner =(userWin ,userChoice,compChoice) => {
    if(userWin) {
        UserScore++;
        userScorepara.innerText = UserScore;
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your${userChoice}`;
        msg.style.backgroundColor = "green";
    }
};

const playGame = (userChoice) => {
     const compChoice = genCompChoice();

     if(userChoice === compChoice){
        // draw game 
      DramGame();
     }else {
        let userWin = true;
        if(userChoice === "rock"){
             userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
             userWin = compChoice === "scissor" ? false : true ;
        }else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin ,userChoice,compChoice);
     }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});