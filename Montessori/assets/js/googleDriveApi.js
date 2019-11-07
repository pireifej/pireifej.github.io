//var API_KEY = "AIzaSyCvwlFdEMnmhl5oQm-OMVslu3VtaD_rYgk";
var API_KEY = "AIzaSyBYLJAEhccZGoLSoCwP40ohSlPP6ikyMuc";
//var CLIENT_ID = "233929041463-69ikr39lc5a9b7jkj2v9vkb6223kv9m2.apps.googleusercontent.com";
var CLIENT_ID = "1047516465851-fsjve73h82ao14ltfiers341r3jcj9d3.apps.googleusercontent.com";
//var CLIENT_SECRET = "53OvzKjaT6j9WALuG2DDa4vX";
var CLIENT_SECRET = "Uxs6ououVFzeFqC-XlNsAooq";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
						"https://docs.googleapis.com/$discovery/rest?version=v1"
					];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/documents.readonly';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

var files = [];
var filesLength = 0;

var NEWS_FOLDER_ID = null;

//  On load, called to load the auth2 library and API client library
function handleClientLoad() {
	gapi.load('client:auth2', initClient); 

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          console.log(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listFiles();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }
}

// get a file
function getFile(fileId) {
	console.log("get file...");
	gapi.client.docs.documents.get({
		'documentId': fileId,
	}).then(function(response) {
			addFileToArray(response);
	});
}

// create new file
function createNewWordDoc(title, content) {
var fileMetadata = {
    'mimeType': 'application/vnd.google-apps.document',
    'name': 'mrHanky'
  }
  var media = {
    mimeType: 'application/vnd.google-apps.document',
    body: 'default1'
  }
  var newTitle = title + ".doc";
  gapi.client.drive.files.create({
    name: newTitle,
	mimeType: 'application/vnd.google-apps.document', //add the mimeType property
    parents: NEWS_FOLDER_ID,
    resource: fileMetadata,
    media: media,
    params: {
      uploadType: 'media'
    },
    body: 'default2',
    fields: 'id'
  }).then(function(result) {
    console.log('File create: ', result);
	console.log(content);
    save(result.result.id, NEWS_FOLDER_ID, content).then(function(result) {
      console.log('File update', result)
	  
	  // move new file under news folder
	  var body = {};
	body.parents = [{ 'id': NEWS_FOLDER_ID }];
	var request = gapi.client.request({
  'path': 'drive/v2/files/'+result.result.id,
  'method': 'PUT',
  'params': {'uploadType': 'multipart', 'alt': 'json'}, 
  'body': body
});

request.execute(function(resp) { 
	console.log("file moved"); 
	console.log(resp);
	});
	  
    })
  })
}

// Adds content. Perhaps not correct using of sdk, but somehow it half-works
function save(fileId, folderId, content) {
  return gapi.client
    .request({
      path: '/upload/drive/v3/files/' + fileId,
      method: 'PATCH',
      params: {
        uploadType: 'media'
      },
      body: content
    })
}

// print folders to find News folder
function listFiles() {
	var folders = [];
	console.log("List folders...");
	gapi.client.drive.files.list({
		'pageSize': 20,
		'q': "mimeType = 'application/vnd.google-apps.folder' and trashed = false", 
		'fields': "nextPageToken, files(id, name)"
	}).then(function(response) {
		var newsFolderExists = false;
		var folders = response.result.files;
		if (folders && folders.length > 0) {
			for (var i = 0; i < folders.length; i++) {
				var folder = folders[i];
				newsFolderExists = (folder.name == "News");
				if (newsFolderExists) {
					console.log("News folder exists already with ID " + folder.id);
					NEWS_FOLDER_ID = folder.id;
					listAllFilesInFolder(NEWS_FOLDER_ID);
					break;
				}
			}
			if (!newsFolderExists) {
				console.log("News folder doesn't exist, so create it");
				createNewFolder("News");
			}
		} else {
			console.log('No folders found.');
		}
	});
}

// create a new folder
function createNewFolder(folderName) {
	var parentId = "1-0PK3OVb_DwzB8JPcX-ChMtovL8Wx2yW";//some parentId of a folder under which to create the new folder
	var fileMetadata = {
		'name' : folderName,
		'mimeType' : 'application/vnd.google-apps.folder',
		'parents': parentId
	};

	gapi.client.drive.files.create({
		resource: fileMetadata,
	}).then(function(response) {
		switch(response.status){
			case 200:
				var file = response.result;
				NEWS_FOLDER_ID = file.id;
				console.log('Created Folder Id: ', file.id);
				break;
			default:
				console.log('Error creating the folder, '+ response);
				break;
		}
	});
}

// print folders
function listFolders(callback) {
	var folders = [];
	console.log("list folders...");
        gapi.client.drive.files.list({
          'pageSize': 20,
		  'q': "mimeType = 'application/vnd.google-apps.folder' and trashed = false",
          'fields': "nextPageToken, files(id, name)"
        }).then(function(response) {
          console.log('Folderss:');
		  console.log(response);
          var files = response.result.files;
          if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
			  var folder = { name: file.name, id: file.id };
				
              console.log(file.name + ' (' + file.id + ')');
            }
			callback(folders);
          } else {
            console.log('No folders found.');
          }
        });
}

function listAllFilesInFolder(folderId) {
	// list files under News folder
	var body = {};
	body.parents = [{ 'id': folderId }];
	var request = gapi.client.request({
		'path': 'drive/v2/files/'+folderId + "/children",
		'method': 'GET',
		'body': body
	});

	request.execute(function(resp) { 
		console.log("Folder contains files ...");
		filesLength = resp.items.length;
		for (var i = 0; i < resp.items.length; i++) {
			var item = resp.items[i];
			console.log(item.id);
			getFile(item.id, addFileToArray);
		}
	});
}

function addFileToArray(file) {
	var newFile = JSON.parse(file.body);
	files.push(newFile);
	if (files.length == filesLength) {
		displayNewsArticles(files);
	}
}
