var React = require('react');
var Component = require('./Component.js');

var Edit = React.createClass({


	handleComponentClick: function(){

	},
	render: function() {
		var questionTitle = this.props.currentQuestion ? this.props.currentQuestion.text : '';

		var currentQuestion = function(){
			if(this.props.currentQuestion){
				return(
					<div>
						<h3>{questionTitle}</h3>
						<Component></Component>
						<a
						onClick={this.handleComponentClick}>
						add component</a>


					</div>
				)
			}
			return;
		}.bind(this)()


		return (
			<div className="col-md-6 col-md-offset-4 col-xs-offset-2 col-xs-8 " id="edit">
				{currentQuestion}					
			</div>
		);
	}

});

module.exports = Edit;