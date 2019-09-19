$( document ).ready(function() {  
	applySchoolConfig();
	   $( "#datepicker" ).datepicker();
});

$( window ).resize(function() {
	//applySchoolConfig();
});

function applySchoolConfig() {
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
	
	$(".title").text(newTitle);
	
	var logoText = $("#logo").text();
	var newLogo = logoText.replace("myVar", schoolName);
	$("#logo").text(newLogo);
	
	var footerText = $("#montessoriFooter").text();
	var newFooter = footerText.replace("myVar", schoolName);
	$("#montessoriFooter").text(newFooter);
}