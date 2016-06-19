var App = Backbone.Model.extend({
	initialize: function(params){
		var currVectorList = this.get("vectorList");
		if(currVectorList===undefined){
			this.set("vectorList", new VectorList());
		}
	}
});