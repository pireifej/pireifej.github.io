var API_KEY = "AIzaSyCvwlFdEMnmhl5oQm-OMVslu3VtaD_rYgk";
var CLIENT_ID = "233929041463-69ikr39lc5a9b7jkj2v9vkb6223kv9m2.apps.googleusercontent.com";
var CLIENT_SECRET = "53OvzKjaT6j9WALuG2DDa4vX";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

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
	gapi.client.drive.files.get({
		'fileId': fileId,
	}).then(function(response) {
			console.log('Files:');
			console.log(response.result.name);
	});
}

// create a new folder
function createNewFolder(folderName, callback) {
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
	  callback(file.id);
      console.log('Created Folder Id: ', file.id);
      break;
    default:
      console.log('Error creating the folder, '+response);
      break;
    }
});
}

// create new file
function createNewWordDoc(folderId, title, content) {
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
    parents: folderId,
    resource: fileMetadata,
    media: media,
    params: {
      uploadType: 'media'
    },
    body: 'default2',
    fields: 'id'
  }).then(function(result) {
    console.log('File create: ', result)
    save(result.result.id, folderId, content).then(function(result) {
      console.log('File update', result)
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

// print files
function listFiles() {
	console.log("list files...");
	gapi.client.drive.files.list({
		'pageSize': 10,
		'fields': "nextPageToken, files(id, name)"
		}).then(function(response) {
			console.log('Files:');
			var files = response.result.files;
			
			if (files && files.length > 0) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					console.log(file);
					}
			} else {
				console.log('No files found.');
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
          console.log('Folders:');
          var files = response.result.files;
          if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
			  var folder = { name: file.name, id: file.id };
			  folders.push(folder);
              console.log(file.name + ' (' + file.id + ')');
            }
			callback(folders);
          } else {
            console.log('No folders found.');
          }
        });
}