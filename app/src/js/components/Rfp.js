var React = require('react');
	Category = require('./Category');
	Question = require('./Question');

var Rfp = React.createClass({

	render: function() {
		return (

			<div class="container">
				<Category />
				<Question />
			</div>
		);
	}

});

module.exports = Rfp;