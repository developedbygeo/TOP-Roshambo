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

function startGame() {
  allButtons.forEach(function (button) {
    button.addEventListener("click", () => {
      const computerChoice = Math.floor(Math.random() * 3);
      const choicesArray = ["rock", "paper", "scissors"];
      const finalComputerChoice = choicesArray[computerChoice];
      console.log(finalComputerChoice);
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
  if (playerSelection == computerSelection) {
    return 0; // tie
  } else if (playerSelection == "rock")
    if (computerSelection === "scissors") {
      return 1; // player wins
    } else if (computerSelection === "paper") {
      return 2; // computer wins
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        return 1; // player wins
      } else if (computerSelection == "scissors") {
        return 2; // computer wins
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
        return 1; // player wins
      } else if (computerSelection == "rock") {
        return 2; // computer wins
      }
    }
}

startGame();
