var InputDataView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	events: {
	    'change input[type=radio]': 'changedRadio',
	    'click #setPoint': 'setPoint'
	},
	changedRadio: function(e) {
		this.model.set('inputMode',e.target.defaultValue);
	},

	setPoint: function() {
		var ptTxt = $('#inputbox').val();
		var txtPoint = $.parseJSON(ptTxt);
		this.model.set('newPoint',txtPoint);
	},

	render: function(){
		var html = [
			'<div>',
				'<input type="radio" name="hat" value="VecRemove">',
				'<input type="radio" name="hat" value="VecInsertBefore">',
				'<input type="radio" name="hat" value="VecInsertAfter">',
				'<input id="inputbox" type="text"/>',
				'<button id="setPoint" class="submit">Set point</button>',
			'</div>',
		].join('');
		
		return this.$el.html(html);
	}
});



