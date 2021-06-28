gsap.registerPlugin(TextPlugin);
const introductionContainer = document.querySelector(".introduction");
const introductionHeader = document.querySelector(".intro");
const placeholderDivs = document.querySelectorAll(".holder");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const allButtons = document.querySelectorAll(".holder");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
let playerCurrentScore = parseFloat(playerScore.innerText);
let computerCurrentScore = parseFloat(computerScore.innerText);
let introductionAnimation = gsap.timeline({ duration: 5 });
let introductionUpdates = [
  "Once upon a time...",
  "A war between AI and humans broke out",
  "and many were lost.",
  "Eventually, it all came down to...",
  "A game of Rock-Paper-Scissors!",
];
let imagesTimeline = gsap.timeline({ defaults: { duration: 1.5, opacity: 0 } });
let introTimeline = gsap.timeline({
  defaults: { duration: 5 },
});
let playerScoreTotal = 0;
let computerScoreTotal = 0;
let totalMatchesCount = 0;

window.addEventListener("load", () => {
  animateUpdates();
  animateImages();
});

// allButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     playerPlay();
//     computerPlay();
//     compareResults();
//   });
// });

// Functions

function animateUpdates() {
  let underscore = gsap.to(".underscore", {
    opacity: 0,
    ease: Sine.easeOut,
    repeat: 45,
  });
  introductionUpdates.forEach((update) => {
    let tween = introTimeline.to(".once", {
      duration: 5,
      text: update,
      stagger: 0.4,
    });
  });
}
// function startGame() {
//   allButtons.forEach(() => {
//     allButtons.addEventListener("click", () => {
//       const computerChoice = Math.floor(Math.random() * 3) + 1;
//       const choicesArray = ["rock", "paper", "scissors"];
//       const finalComputerChoice = choicesArray[computerChoice];
//       console.log(finalComputerChoice);
//     });
//   });
// }

function gameInit() {
  allButtons.forEach(function (button) {
    const playerCommentary = document.querySelector(".player-commentary");
    const computerCommentary = document.querySelector(".computer-commentary");
    button.addEventListener("click", () => {
      const computerChoice = Math.floor(Math.random() * 3);
      const choicesArray = ["rock", "paper", "scissors"];
      const finalPlayerChoice = button.id;
      const finalComputerChoice = choicesArray[computerChoice];
      console.log(button.id);
      console.log(finalComputerChoice);
      compareResults(finalPlayerChoice, finalComputerChoice);
      playerCommentary.innerText = `You selected ${finalPlayerChoice}.`;
      computerCommentary.innerText = `The computer selected ${finalComputerChoice}.`;
    });
  });
}

function animateImages() {
  imagesTimeline.from(placeholderDivs, {
    ease: Power1.easeOut,
    y: 30,
    stagger: 0.8,
  });
}

function playerPlay() {
  // try let result = '' and store result in var to compare?
  rock.addEventListener("click", () => {
    return "rock";
  });
  paper.addEventListener("click", () => {
    return "paper";
  });
  scissors.addEventListener("click", () => {
    return "scissors";
  });
  console.log(playerPlay.value);
}

// function computerPlay() {
//   let guess = Math.floor(Math.random() * 3) + 1;
//   switch (guess) {
//     case 1:
//       return "rock";
//       break;
//     case 2:
//       return "paper";
//       break;
//     case 3:
//       return "scissors";
//       break;
//   }
// }
function storeResults() {}

function compareResults(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  const winnerCommentary = document.querySelector(".score-commentary-final");
  winnerCommentary.style.letterSpacing = "1rem";
  winnerCommentary.style.fontWeight = "bold";
  winnerCommentary.style.fontSize = "3rem";
  if (playerSelection === computerSelection) {
    winnerCommentary.innerText = "TIE";
    winnerCommentary.style.color = "#e5e5e5";
  } else if (playerSelection == "rock")
    if (computerSelection === "scissors") {
      winnerCommentary.innerText = "WIN";
      winnerCommentary.style.color = "#2a9d8f";
      playerScoreTotal++;
      playerScore.innerText = playerScoreTotal;
      playerScore.style.color = "#2a9d8f";
    } else if (computerSelection === "paper") {
      winnerCommentary.innerText = "DEFEAT";
      winnerCommentary.style.color = "#2a9d8f";
      computerScoreTotal++;
      computerScore.innerText = computerScoreTotal;
      playerScore.style.color = "#e5e5e5";
      computerScore.style.color = "#e76f51";
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        winnerCommentary.innerText = "WIN";
        winnerCommentary.style.color = "#2a9d8f";
        playerScoreTotal++;
        playerScore.innerText = playerScoreTotal;
        playerScore.style.color = "#2a9d8f";
      } else if (computerSelection == "scissors") {
        winnerCommentary.innerText = "DEFEAT";
        winnerCommentary.style.color = "#2a9d8f";
        computerScoreTotal++;
        computerScore.innerText = computerScoreTotal;
        playerScore.style.color = "#e5e5e5";
        computerScore.style.color = "#e76f51";
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
        winnerCommentary.innerText = "WIN";
        winnerCommentary.style.color = "#2a9d8f";
        playerScoreTotal++;
        playerScore.innerText = playerScoreTotal;
        playerScore.style.color = "#2a9d8f";
      } else if (computerSelection == "rock") {
        winnerCommentary.innerText = "DEFEAT";
        winnerCommentary.style.color = "#2a9d8f";
        computerScoreTotal++;
        computerScore.innerText = computerScoreTotal;
        playerScore.style.color = "#e5e5e5";
        computerScore.style.color = "#e76f51";
      }
    }
}

gameInit();
