// when using an image that is inside a folder use /FOLDERNAME/IMAGENAME.PNG notation

// Initialize a variable called images that stores an array of pictures
const images = [
  "images/robot_1.jpg",
  "images/robot_2.jpg",
  "images/robot_3.jpg",
];

// Initialize a variable called carousel and use the document query selector function to get access to the .carousel classname in your html
const carousel = document.querySelector(".carousel");

// Use build in function from tiny-slider called setInterval that determines how often the image gets changed and store it in a variable called interval
const interval = setInterval(function () {
  // Call on the startCarousel function, indicate how often this function is called in ms
  startCarousel();
}, 3000);

//  Initialize a variable called index and set it to 1, it will be used as a counter to tell the startCarousel function when to switch pictures
var index = 1;

// Create the startCarousel function to change the images
startCarousel = () => {
  // Shows the next image by incrementing index
  carousel.style.backgroundImage = `url(${images[index++]})`;

  // Removes the animation
  carousel.classList.remove("fade");

  // Use void carousel.offsetWidth to make animation work
  void carousel.offsetWidth;
  // Adds the animation to show the next image
  carousel.classList.add("fade");

  // When the last image is reached start at the beginning again.
  if (index > images.length - 1) index = 0;
};
