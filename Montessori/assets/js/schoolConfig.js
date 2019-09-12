$( document ).ready(function() {  
    var mySchool = "d";
	var schoolName = "";
	
	// Default
	if (mySchool == "d") {
		schoolName = "Holmdel & Manalapan";
	}
	
	// Holmdel Montessori
	if (mySchool == "h") {
		schoolName = "Holmdel";
	}
	
	// Manalapan Montessori
	if (mySchool == "m") {
		schoolName = "Manalapan";
	}
	
	var titleText = $("#title").text();
	var newTitle = titleText.replace("myVar", schoolName);
	$("#title").text(newTitle);
	
	var logoText = $("#logo").text();
	var newLogo = logoText.replace("myVar", schoolName);
	$("#logo").text(newLogo);
	
	var footerText = $("#montessoriFooter").text();
	var newFooter = footerText.replace("myVar", schoolName);
	$("#montessoriFooter").text(newFooter);
});

	var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
