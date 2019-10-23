

$( document ).ready(function() {
	$( "#datepicker" ).datepicker();
});

$( "#add-article" ).click(function() {
	var date = $("#datepicker").val();
	var title = $("#news-title").val();
	var content = $("#content").val();
	
	var googleDriveContent = date + "\n" + title + "\n" + content;
	
	createNewWordDoc(title, googleDriveContent);
	addNewArticle(date, title, content);
		
	$("#datepicker").val("");
	$("#news-title").val("");
	$("#content").val("");
});

function postListFiles(folderId) {
	console.log("my news folder is ");
	listAllFilesInFolder(folderId, displayNewsArticles);
}

function displayNewsArticles(files) {
	console.log("displayNewsArticles");
	
	var newsArticles = [];
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		console.log(file);
	}
}

function addNewArticle(date, title, content) {
	var articleHTML = "<article><header><h2>";
	articleHTML += title + "</header>";
	articleHTML += "<span class='image featured'><img src='images/banner.jpg' alt='' /></span>";
	articleHTML += "<h3>" + date + "</h3>";
	articleHTML += "<p>" + content + "</p>";
	articleHTML += "</article>";
	
	articleHTML += "<section id='ctas' class='wrappersmall style3'>";
	articleHTML += 	"<div class='container'>";
	articleHTML += 	"<header>";
	articleHTML += 	"</header>";
	articleHTML += "</div>";
	articleHTML += "</section>";

	$("#news-articles").after(articleHTML);
	
	var archiveHTML = "<li><a href='#'>" + title + " - " + date + "</a></li>";
	
	$("#archives").after(archiveHTML);
}