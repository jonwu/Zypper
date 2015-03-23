var React = require('react');

var Edit = React.createClass({

	render: function() {
		var questionTitle = this.props.currentQuestion ? this.props.currentQuestion.text : '';
		return (
			<div className="col-md-6 col-md-offset-4 col-xs-offset-2 col-xs-8 " id="edit">

				<h3>{questionTitle}</h3>
			</div>
		);
	}

});

module.exports = Edit;