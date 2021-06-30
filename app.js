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
const playAgainButton = document.querySelector(".play-again");
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

window.addEventListener("load", () => {
  animateUpdates();
  animateImages();
  gameInit();
});

playAgainButton.addEventListener("click", () => {
  location.reload();
});

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

function gameInit() {
  allButtons.forEach(function (button) {
    const playerCommentary = document.querySelector(".player-commentary");
    const computerCommentary = document.querySelector(".computer-commentary");
    button.addEventListener("click", () => {
      const computerChoice = Math.floor(Math.random() * 3);
      const choicesArray = ["rock", "paper", "scissors"];
      const finalPlayerChoice = button.id;
      const finalComputerChoice = choicesArray[computerChoice];
      playerCommentary.innerText = `You selected ${finalPlayerChoice}.`;
      computerCommentary.innerText = `The computer selected ${finalComputerChoice}.`;
      compareResults(finalPlayerChoice, finalComputerChoice);
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

function compareResults(playerSelection, computerSelection) {
  const winnerCommentary = document.querySelector(".score-commentary-final");
  winnerCommentary.style.letterSpacing = "1rem";
  winnerCommentary.style.fontWeight = "bold";
  winnerCommentary.style.fontSize = "3rem";
  if (playerSelection === computerSelection) {
    winnerCommentary.innerText = "TIE";
    winnerCommentary.style.color = "#e5e5e5";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      winnerCommentary.innerText = "DEFEAT";
      winnerCommentary.style.color = "#e76f51";
      computerCurrentScore++;
      computerScore.innerText = computerCurrentScore;
      computerScore.style.color = "#e76f51";
    } else {
      winnerCommentary.innerText = "WIN";
      winnerCommentary.style.color = "#2a9d8f";
      playerCurrentScore++;
      playerScore.innerText = playerCurrentScore;
      playerScore.style.color = "#2a9d8f";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      winnerCommentary.innerText = "DEFEAT";
      winnerCommentary.style.color = "#e76f51";
      computerCurrentScore++;
      computerScore.innerText = computerCurrentScore;
      computerScore.style.color = "#e76f51";
    } else {
      winnerCommentary.innerText = "WIN";
      winnerCommentary.style.color = "#2a9d8f";
      playerCurrentScore++;
      playerScore.innerText = playerCurrentScore;
      playerScore.style.color = "#2a9d8f";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      winnerCommentary.innerText = "DEFEAT";
      winnerCommentary.style.color = "#e76f51";
      computerCurrentScore++;
      computerScore.innerText = computerCurrentScore;
      computerScore.style.color = "#e76f51";
    } else {
      winnerCommentary.innerText = "WIN";
      winnerCommentary.style.color = "#2a9d8f";
      playerCurrentScore++;
      playerScore.innerText = playerCurrentScore;
      playerScore.style.color = "#2a9d8f";
    }
  }
  if (computerCurrentScore == 10) {
    gameTerminateDefeat();
  } else if (playerCurrentScore == 10) {
    gameTerminateWin();
  }
}

function gameTerminateDefeat() {
  const winnerAnnouncement = document.querySelector(".result");
  const winnerTextAndButton = document.querySelector(".play-again-div");
  const commentaryDiv = document.querySelector(".score-com");
  allButtons.forEach(function (button) {
    button.style.display = "none";
  });
  commentaryDiv.style.display = "none";
  playAgainButton.classList.add("active");
  winnerAnnouncement.innerText = "LOST";
  winnerAnnouncement.style.color = "#e76f51";
  winnerTextAndButton.classList.add("play-again-div-active");
}

function gameTerminateWin() {
  const winnerAnnouncement = document.querySelector(".result");
  const winnerTextAndButton = document.querySelector(".play-again-div");
  const commentaryDiv = document.querySelector(".score-com");
  allButtons.forEach(function (button) {
    button.style.display = "none";
  });
  commentaryDiv.style.display = "none";
  playAgainButton.classList.add("active");
  winnerAnnouncement.innerText = "WON";
  winnerAnnouncement.style.color = "#2a9d8f";
  winnerTextAndButton.classList.add("play-again-div-active");
}
