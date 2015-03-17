var React = require('react');

var Question = React.createClass({

	
	render: function() {
		var questions = this.props.questions.map(function(question, i){
			return (
				<li className = "list-group-item "  key={question.id}>
					<a>{question.text}</a>
				</li>
			);
		}.bind(this));

		return (
			<div className="col-md-3 col-md-offset-1" id="question">
				{questions}
			</div>
		);
	}

});

module.exports = Question;