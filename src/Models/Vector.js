var Vector = Backbone.Model.extend({
	defaults: {
		x: 0,
		y: 0
	},

	length2: function(){
		return this.x*this.x + this.y*this.y;
	},

	length1: function(){
		return Math.sqrt(this.length2());
	}
});