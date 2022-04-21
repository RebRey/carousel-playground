//See tiny-slider library documentation for more info
// create a variable and use built in value of tns
let slider = tns({
  container: ".my-slider", //indicate where the slides are located in the html by using it's classname
  slideBy: 1, // indicates how many images you want to skip when you click on the next image
  speed: 400,
  nav: false, // true makes the navigation indicators visible, false removes them
  controlsContainer: "#controls", // Allows to use custom buttons
  prevButton: ".previous", // indicate the previous button that you want to use.
  nextButton: ".next", // indicate the next button that you want to use.
  responsive: {
    1600: {
      items: 4, // 4 images will be displayed when the screen is 1600px
      gutter: 20, // adds padding between images
    },
    1024: {
      items: 3, // 3 images will be displayed when the screen is 1024px
      gutter: 20, // adds padding between images
    },
    768: {
      items: 2, // 2 images will be displayed when the screen is 768px
      gutter: 20, // adds padding between images
    },
    480: {
      items: 1, // 1 images will be displayed when the screen is 480px
      gutter: 20, // adds padding between images (not necessary if only 1 image)
    },
  },
});
