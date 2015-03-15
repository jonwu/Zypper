var React = require('react');
	Header = require('./Header.js');
	Signin = require('./Signin.js');
	Rfp = require('./Rfp.js');
	// Category = require('Category.js');
	// Question = require('Question.js');
	// Submission = require('Submission.js');

var View = React.createClass({
	getInitialState: function() {
		return {
			isSignIn: true
		};
	},

	render: function() {
		
		var page = function(){
			if (!this.state.isSignIn){
				return <Signin />
			}
			return <Rfp />
			
		}.bind(this)();

		return (
			
			<div id="container">
				<Header />
				<div className="row">
				{page}
				</div>
			</div>	




		);
	}

});

module.exports = View;



