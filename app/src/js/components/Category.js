var React = require('react');
var Category = React.createClass({
	
	setCategory: function(i){
		var category = this.props.categories[i]
		this.props.setCurrentCategory(category)
	},

	render: function() {

		var categories = this.props.categories.map(function(category, i){
			return (
				<li key={category.id}>
					<a onClick={this.setCategory.bind(this, i)}>{category.text}</a>
				</li>
			);
		}.bind(this));

		return (
			<div className="col-md-1" id="category">
				{categories}
			</div>

		);
	}

});

module.exports = Category;
