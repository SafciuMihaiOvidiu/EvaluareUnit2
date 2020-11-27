function myFunction() {
  document.getElementById("nr1").style.display = "none";
  document.getElementById("nr2").style.display = "none";
  document.getElementById("nr3").style.display = "none";
  document.getElementById("slideshow").style.display = "block";
  document.getElementById("dots").style.display= "block";
  document.getElementById("dots").style.textAlign= "center";
}
var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}