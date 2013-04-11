
var app = app || {};

app.TasksView = Backbone.View.extend({

	className : "row",

	templateName : "#tasks-template",

	events: {
		"keypress #new-task": "createTaskOnEnter"
	},

	initialize : function(){
		this.template = _.template($(this.templateName).html());

		this.listenTo(this.collection, 'reset', this.addAll);
		this.listenTo(this.collection, 'add', this.addOne);
	},

	render : function(){
		this.$el.html(this.template());
		
		this.input = this.$("#new-task");

		if(this.collection.length && this.$('ul').empty()){
			this.addAll();
		}
		return this;
	},

	addAll : function(){
		this.collection.each(this.addOne, this);
	},

	addOne : function(task){
		var view = new app.TaskView({model : task});
		this.$('ul').append(view.render().el);
	},

	createTaskOnEnter: function(e){
		if(e.keyCode != ENTER_KEY) return;

		if (!this.input.val()) return;

		this.collection.create({title: this.input.val()});

		this.input.val('');

	}

});