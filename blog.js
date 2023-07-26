// Get the button:
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("iot-back-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("called")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton2.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "none";
  }
}
