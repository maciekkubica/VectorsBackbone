var AppView = Backbone.View.extend({
	initialize: function(){
		this.inputDataView = new InputDataView({model:this.model.get('inputData')});
		this.vectorListView =  new VectorListView({collection:this.model.get('vectorList')});
	},

	render: function(){
		return this.$el.html([
			'<h1>Vectors</h1>',
			this.inputDataView.$el,
			this.vectorListView.$el
			]);
	}
});