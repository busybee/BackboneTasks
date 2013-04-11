
var app = app || {};

app.TaskListCollection = Backbone.Collection.extend({

	model: app.TaskList,

	url: app.baseUrl + "/users/@me/lists",

	parse: function(response){
		return response.items;
	}
});