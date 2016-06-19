var AppView = Backbone.View.extend({
	initialize: function(){
		this.vectorListView =  new VectorListView({collection:this.model.get('vectorList')});
		//this.render();
	},

	render: function(){
		return this.$el.html('<h1>Points</h1>').append( this.vectorListView.render());
	}
});