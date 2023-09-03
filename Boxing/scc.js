// Get a reference to the button and the container
var tsicon = document.getElementById("tsicon");
var techstack = document.getElementById("techstack");

// Add an event listener for clicks on the button
tsicon.addEventListener("click", function () {
  // Show the container by setting its display property to "block"
  if (techstack.style.display === "block") {
      
    techstack.style.display = "none";
    } else {

    techstack.style.display = "block";
    }
  
});


