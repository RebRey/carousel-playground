// initialize a variable called index (name it and give it a value of 0)
var index = 0;

// create a function that will activate the buttons to view the images (next, prev)
show_slide = (i) => {
  // increment/decrement slide index, when the user clicks on previous it will decrement by one.
  index += i;

  // grab the elements that have the class "image" and store them in a variable called images.
  var images = document.getElementsByClassName("image");
  // grab the elements that have the class "dot" and store them in a variable called indicators.
  var indicators = document.getElementsByClassName("dot");

  // hide all the images, iterate through each image (every time the user clicks on the prev or next the images will reappear)
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // remove the active class from the dot, iterate through each of the indicator dots turns the dot darker in color
  for (i = 0; i < indicators.length; i++) 
  indicators[i].className = indicators[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  // If the user is on the last image and they click on the next button, it will send them to the first image
  if (index > images.length - 1) 
    index = 0 ;
  
  // if index is less than zero (set it to the length of images)
  // If the user is on the first image and they click on the previous button, it will send them to the last image
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";
  // only make the current dot active (the active dot will be darker than the rest)
  indicators[index].className += " active";

}

window.addEventListener("onload", show_slide(index));

