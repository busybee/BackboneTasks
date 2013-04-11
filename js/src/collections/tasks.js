
var app = app || {};

app.TaskCollection = Backbone.Collection.extend({

	model: app.Task,

	url: function(){
		return app.baseUrl + "/lists/" + this.list.get("id") + "/tasks";
	},

	parse: function(response){
		return response.items;
	}
});