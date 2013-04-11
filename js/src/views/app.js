
var app = app || {};

app.AppView = Backbone.View.extend({

	el: $("#tasks-app"),

	events: {
		"keypress #new-tasklist":  "createTasklistOnEnter"
	},

	initialize: function(){

		// initialize tasklists
		this.tasklists = new app.TaskListCollection();
		this.tasklistsview = new app.TaskListsView({collection: this.tasklists});
		var self = this;

		// fetch tasklists, then fetch tasks for each tasklist
		$.when(this.tasklists.fetch()).then(function(){
			self.tasklists.each(function(tasklist){
				tasklist.tasks.fetch();
			});      		
		});

		this.input = this.$("#new-tasklist");

	},

	render: function(){
		this.$el.append(this.tasklistsview.render().el);
		return this;
	 },

	createTasklistOnEnter : function(e) {
		if (e.keyCode != ENTER_KEY) return;
		if (!this.input.val()) return;

		this.tasklists.create({title: this.input.val()});
		this.input.val('');
	}
});
