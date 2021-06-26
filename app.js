gsap.registerPlugin(TextPlugin);
const introductionContainer = document.querySelector(".introduction");
const introductionHeader = document.querySelector(".intro");
const placeholderDivs = document.querySelectorAll(".holder");
let introductionAnimation = gsap.timeline({ duration: 5 });
let introductionUpdates = [
  "A war between AI and humans broke out",
  "and many were lost.",
  "Eventually, it all came down to...",
  "A game of Rock-Paper-Scissors!",
];

window.addEventListener("load", () => {
  animateUpdates();
  animateImages();
});

// Functions

function animateUpdates() {
  let timeline = gsap.timeline({ duration: 3 });
  let underscore = gsap.to(".underscore", {
    opacity: 0,
    ease: Sine.easeOut,
    repeat: 45,
  });
  introductionUpdates.forEach((update) => {
    let tween = timeline.to(".once", {
      duration: 5,
      text: update,
      stagger: 0.4,
    });
  });
}

function animateImages() {
  gsap.from(placeholderDivs, {
    opacity: 0,
    duration: 1.5,
    ease: Power1.easeOut,
    y: 30,
    stagger: 0.8,
  });
}
