var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
setTimeout(() => {
   document.getElementById("my-canvas").classList.remove("active");
}, 4000);