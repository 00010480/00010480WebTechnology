//Variable of slider index
var slideIndex = 0;
//Function name
carousel();

//Declaring function
function carousel() {
//Declaring variables
  var slideNumber;
  var slideElement = document.getElementsByClassName("slide");
//Loop each slide to show next slide
  for (slideNumber = 0; slideNumber < slideElement.length; slideNumber++) {
    slideElement[slideNumber].style.display = "none";  
  }
  slideIndex++;
//If element == to last element loop again
  if (slideIndex > slideElement.length) {slideIndex = 1}
  slideElement[slideIndex-1].style.display = "block";
// Change to another image every 2 seconds
  setTimeout(carousel, 2000);
}