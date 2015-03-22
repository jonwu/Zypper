var React = require('react');
var NewQuestion = require('./NewQuestion');
var Textarea = require('react-textarea-autosize');
var Question = React.createClass({

	
	render: function() {
		var questions = this.props.questions.map(function(question, i){
			return (
				<li className = "list-group-item" key={question.id}>
					<Textarea>{question.text}</Textarea>
				</li>
			);
		}.bind(this));

		return (
			<div className="col-md-3 col-md-offset-1 col-xs-offset-2 col-xs-6 " id="question">
				<div className="list-group">
					<li className = "list-group-item">
						<NewQuestion />
					</li>
					{questions}
				</div>
			</div>
		);
	}

});

module.exports = Question;