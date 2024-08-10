// Select elements

var counter = document.querySelector("#count");
var allButtons = document.querySelectorAll(".btn");

// Intialization
var count = 0;

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("increase")) {
      count++;
    } else if (button.classList.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    // Update counter
    counter.innerHTML = count;

    // Play sound
    var buttonSound = new Audio("sound/buttonSound.mp3");
    buttonSound.play();

    // Change counter color
    // Code on line 27: To remove conflicting classes before adding the  new classes
    counter.classList.remove("increase", "decrease", "reset");

    if (count === 0) {
      counter.classList.add("reset");
    } else if (count < 0) {
      counter.classList.add("decrease");
    } else {
      counter.classList.add("increase");
    }
  });
});
