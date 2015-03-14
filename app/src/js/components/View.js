var React = require('react');
	Header = require('./Header.js');
	Signin = require('./Signin.js');
	// Category = require('Category.js');
	// Question = require('Question.js');
	// Submission = require('Submission.js');

var View = React.createClass({
	getInitialState: function() {
		return {
			isSignIn: false
		};
	},

	render: function() {
		
		var page = function(){
			if (!this.state.isSignIn){
				return <Signin />
			}
			
		}.bind(this)();

		return (
			
			<div id="container">
				<Header />
				{page}
			</div>	




		);
	}

});

module.exports = View;



