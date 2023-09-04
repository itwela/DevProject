
// Get a reference to the button and the container
var tsicon = document.getElementById("tsicon");
var techstack = document.getElementById("techstack");



// Add an event listener for clicks on the button
tsicon.addEventListener("click", function () {
  // Show the container by setting its display property to "block"
  if (techstack.style.display === "block") {
    fadeOut(techstack);
  } else {
    fadeIn(techstack);
  }
});

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "block";
  var op = 0; // initial opacity
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    op += op * 0.1 || 0.1;
  }, 50);
}

function fadeOut(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    op -= op * 0.1;
  }, 50);
}




