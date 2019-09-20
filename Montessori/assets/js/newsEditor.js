$( "#add-article" ).click(function() {
	var date = $("#datepicker").val();
	var title = $("#news-title").val();
	var content = $("#content").val();
	
	addNewArticle(date, title, content);
	
	$("#datepicker").val("");
	$("#news-title").val("");
	$("#content").val("");
});

$( document ).ready(function() {
	var clientSecret = "UH2YL_twFmmbqSybeaOsQaNW";
	var clientId = "233929041463-sk7hss8jq03d5d8aki150gbd4c3anjuf.apps.googleusercontent.com";
	var apiKey = "AIzaSyAIGQ7JXXVq9N3riU4tGFVwWvIVPiLIJu8";
	$( "#datepicker" ).datepicker();
});

function addNewArticle(date, title, content) {
	var articleHTML = "<article><header><h2>";
	articleHTML += title + "</header>";
	articleHTML += "<span class='image featured'><img src='images/banner.jpg' alt='' /></span>";
	articleHTML += "<h3>" + date + "</h3>";
	articleHTML += "<p>" + content + "</p>";
	articleHTML += "</article>";

	$("#news-articles").after(articleHTML);
	
	var archiveHTML = "<li><a href='#'>" + title + " - " + date + "</a></li>";
	
	$("#archives").after(archiveHTML);
}