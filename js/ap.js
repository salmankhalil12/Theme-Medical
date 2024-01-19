// Navbar


document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
      $(window).scroll(function () { // check if scroll event happened
          if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
              $(".navbar-top").css("background-color", "#F8F8F8"); // if yes, then change the color of class "navbar-fixed-top" to white (#F8F8F8)
          } else {
              $(".navbar-top").css("background-color", "transparent"); // if not, change it back to transparent
          }
      });
  });
});


// Navbar


// Counter Count Down
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );
  
    var thisElement = $(this);
  
    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
  };
  
  
  $('#number1').jQuerySimpleCounter({end: 93,duration: 3000});
  $('#number2').jQuerySimpleCounter({end: 48,duration: 3000});
  $('#number3').jQuerySimpleCounter({end: 12,duration: 2000});
  $('#number4').jQuerySimpleCounter({end: 96,duration: 2500});
  
  // Top Button
  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}