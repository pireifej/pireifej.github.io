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
	var clientSecret = "Uxs6ououVFzeFqC-XlNsAooq";
	var clientId = "1047516465851-fsjve73h82ao14ltfiers341r3jcj9d3.apps.googleusercontent.com";
	var apiKey = "AIzaSyBYLJAEhccZGoLSoCwP40ohSlPP6ikyMuc";
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