var VectorView = Backbone.View.extend({
	template: _.template('{x:<%=x%>,y:<%=y%>}'),
	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});