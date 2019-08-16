
// Open the Modal
function openup() {
  document.getElementById("upcontainer").style.display = "block";
}

function antichrist() {
  document.getElementById("antichrist").style.display = "none";
}

// Close the Modal
function closeup() {
  document.getElementById("upcontainer").style.display = "none";
}

function antichristRevers() {
  document.getElementById("antichrist").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("upSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function viewDiv(){
  document.getElementById("div1").style.top = "0px";
  document.getElementById("close").style.top = "0px";
};

function closeDiv(){
  document.getElementById("div1").style.top = "-800px";
};