//selects all movies from list
filterSelection("all")
//make function and declaring one parameter to this function
function filterSelection(c) {
//declaring two new variables in this function
  var myDocument, i;
//get all elements of a class 'filterMovies'
  myDocument = document.getElementsByClassName("filterMovies");
// if delcared all elements show all list
  if (c == "all") c = "";
//showing all if list corresponds to the category
  for (i = 0; i < myDocument.length; i++) {
    RemoveClass(myDocument[i], "show");
    if (myDocument[i].className.indexOf(c) > -1) AddClass(myDocument[i], "show");
  }
}

//Showing only elements that corresponds to the category
function AddClass(element, name) {
 //declaring two new variables in this function
  var i, firstElement, secondElement;
//to find element from multiple classes i used split method that actually creates an array by splitting strings which we can the access.
  firstElement = element.className.split(" ");
  secondElement = name.split(" ");
  for (i = 0; i < secondElement.length; i++) {
      //here we can access this array by index[i]
    if (firstElement.indexOf(secondElement[i]) == -1) {element.className += " " + secondElement[i];}
  }
}

//Hide elements that not corresponds to the category like in AddClass
function RemoveClass(element, name) {
//declaring two new variables in this function
  var i, firstElement, secondElement;
//to find element from multiple classes i used split method that actually creates an array by splitting strings which we can the access.
  firstElement = element.className.split(" ");
  secondElement = name.split(" ");
  for (i = 0; i < secondElement.length; i++) {
//if this array not corresponds to the category that we need remove this array
    while (firstElement.indexOf(secondElement[i]) > -1) {
      firstElement.splice(firstElement.indexOf(secondElement[i]), 1);     
    }
  }
//joined elements
  element.className = firstElement.join(" ");
}
