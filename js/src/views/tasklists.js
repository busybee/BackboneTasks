
var app = app || {};

app.TaskListsView = Backbone.View.extend({

	className : "row",

	initialize : function(){
		this.listenTo(this.collection, 'reset', this.addAll);
		this.listenTo(this.collection, 'add', this.addOne);
	},

	render : function(){
		if(this.collection.length && this.$el.empty()){
			this.addAll();
		}
		return this;
	},

	addAll : function() {
		this.collection.each(this.addOne, this);
	},

	addOne : function(list) {
		var view = new app.TaskListView({model: list});
		this.$el.append(view.render().el);
	}
});