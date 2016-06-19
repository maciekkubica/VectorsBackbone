var VectorListView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.children().detach();
		return this.$el.html('<div>Vectors:</div>').append(
			this.collection.map( function(value){
				return new VectorView( {model:value}).render();
			})

		);
	}
});