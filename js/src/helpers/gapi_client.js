
	  var clientId = '327945083708.apps.googleusercontent.com';
	  var apiKey = 'AIzaSyCF58RD3LsL5h1ftcnrJgSr0X3rZpkuAgA';
	  var scopes = 'https://www.googleapis.com/auth/tasks';

	  // Use a button to handle authentication the first time.
	  function handleClientLoad() {
		gapi.client.setApiKey(apiKey);
		window.setTimeout(checkAuth,1);
	  }

	  function checkAuth() {
		gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
	  }

	  function handleAuthResult(authResult) {
		var authorizeButton = document.getElementById('authorize-button');
		if (authResult && !authResult.error) {
		  authorizeButton.style.visibility = 'hidden';
		  $("#tasks-app").removeClass("hide");
		  makeApiCall();
		} else {
		  $("#tasks-app").addClass("hide");
		  authorizeButton.style.visibility = '';
		  authorizeButton.onclick = handleAuthClick;
		}
	  }

	  function handleAuthClick(event) {
		gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
		return false;
	  }

	  // Load the API and make an API call.  Display the results on the screen.
	  function makeApiCall() {
		var appView = new app.AppView();
		appView.render();

	  }