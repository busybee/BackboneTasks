
var app = app || {} ;

app.TaskListView = Backbone.View.extend({
	
	className : "tasklist span4 well",

	templateName : "#tasklist-template",

	initialize : function(){
		this.template = _.template($(this.templateName).html());
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		var v = new app.TasksView({collection: this.model.tasks});
		this.$el.append(v.render().el);
		return this;
	}

});