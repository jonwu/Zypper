var React = require('react');
var Category = React.createClass({
	
	setCategory: function(i){
		var category = this.props.categories[i]
		this.props.setCurrentCategory(category)
	},

	render: function() {

		var categories = this.props.categories.map(function(category, i){
			return (
				<li key={category.id} onClick={this.setCategory.bind(this, i)}>
					<h1>{category.text[0]}</h1>
					<a>{category.text}</a>
				</li>
			);
		}.bind(this));

		return (
			<div className="col-md-1 col-xs-2" id="category">
				<ul>
					{categories}
				</ul>
			</div>

		);
	}

});

module.exports = Category;
