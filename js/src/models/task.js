var app = app || {};

app.Task = Backbone.Model.extend({
 
	defaults: function() {
	  return {
		title: "empty task...",
		status: "needsAction",
		done: false
	  };
	},

	parse: function(response){
		response.done = response.status === "completed";
		return response;
	},

	toggle: function(){
		var newStatus = (this.get("status") === "needsAction" ? "completed" : "needsAction");
		if(newStatus === "needsAction"){
			this.save({
				status: newStatus,
				completed: null
			});
		}
		else {
			this.save({status: newStatus});
		}
	}
	
  });
