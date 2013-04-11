var app = app || {};

app.TaskList = Backbone.Model.extend({

	defaults: function() {
		return {
			title: "empty list"
		};
	},

	initialize: function(){
		this.tasks = new app.TaskCollection();
		this.tasks.list = this;
	}
});