var app = app || {} ;

app.TaskView = Backbone.View.extend({
	
	tagName : "li",

	templateName : "#task-template",

	events : {
		"click .toggle" : "toggleDone",
		"click .icon-pencil": "edit",
		"click .icon-remove": "deleteTask",
		"keypress .edit-task": "saveOnEnter",
		"blur .edit-task": "clearEdit"
	},

	initialize : function(){
		this.template = _.template($(this.templateName).html());
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.toggleClass('done', this.model.get('done'));
		this.input = this.$(".edit-task");
		return this;
	},

	toggleDone : function() {
		this.model.toggle();
	},

	edit : function(){
		this.$el.addClass("editing");
		return false;
	},

	clearEdit : function(){
		this.input.val(this.model.get("title"));
		this.$el.removeClass("editing");
	},

	saveOnEnter : function(e){
		if(e.keyCode != ENTER_KEY) return;

		if (!this.input.val()) return;

		this.model.save({title: this.input.val()});

		this.clearEdit();
	},

	deleteTask : function(){
		this.model.destroy();
	}
});