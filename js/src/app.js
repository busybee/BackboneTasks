
var app = app || {};

var ENTER_KEY = 13;

app.baseUrl = "https://www.googleapis.com/tasks/v1";

Backbone.ajax = function(options) {

	options.url = options.url + "?access_token="
	+encodeURIComponent(gapi.auth.getToken().access_token)
	+"&key="+encodeURIComponent(apiKey);

	return Backbone.$.ajax.apply(Backbone.$, [options]);
};