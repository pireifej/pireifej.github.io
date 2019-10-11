var NEWS_FOLDER_ID = null;

$( "#add-article" ).click(function() {
	var date = $("#datepicker").val();
	var title = $("#news-title").val();
	var content = $("#content").val();
	
	addNewArticle(date, title, content);
	
	//console.log("saving article");
	//getFile("12gQMUqWRc3twy6KNd9Cl8t19pS3nZrQo");
	
	// create News folder if doesn't already exist
	listFolders(postFolderLoad);
});

function postCreateFolder(folderId) {
	NEWS_FOLDER_ID = folderId;
	console.log("postCreateFolder " + NEWS_FOLDER_ID);
	
	var date = $("#datepicker").val();
	var title = $("#news-title").val();
	var content = $("#content").val();
	
	var googleDriveContent = date + "\n" + title + "\n" + content;
	
	console.log(date, title, content);
	createNewWordDoc(NEWS_FOLDER_ID, title, googleDriveContent);
	
	$("#datepicker").val("");
	$("#news-title").val("");
	$("#content").val("");
}

function postFolderLoad(folders) {
	var newsFolderExists = false;
	for (var i = 0; i < folders.length; i++) {
		var thisFolder = folders[i];
		console.log(thisFolder);;
		newsFolderExists = (thisFolder.name == "News");
		if (newsFolderExists) { 
			NEWS_FOLDER_ID = thisFolder.id;
			postCreateFolder(NEWS_FOLDER_ID);
			break;
		}
	}
	if (!newsFolderExists) {
		createNewFolder("News", postCreateFolder);
	}
}

$( document ).ready(function() {
	$( "#datepicker" ).datepicker();
});

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