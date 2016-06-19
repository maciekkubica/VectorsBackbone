var VectorView = Backbone.View.extend({
	template: _.template('<div class="vectorListItem">{x:<%=x%>,y:<%=y%>}</div>'),
	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});