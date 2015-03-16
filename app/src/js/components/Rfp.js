var React = require('react');
	Category = require('./Category');
	Question = require('./Question');

var Rfp = React.createClass({

	render: function() {
		return (
			
			<div >
				<Category api={this.props.api} token={this.props.token} />
				<Question api={this.props.api} token={this.props.token}/>
			</div>
		);
	}

});

module.exports = Rfp;