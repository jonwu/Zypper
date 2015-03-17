var React = require('react');
	Header = require('./Header.js');
	Signin = require('./Signin.js');
	Rfp = require('./Rfp.js');
	// Category = require('Category.js');
	// Question = require('Question.js');
	// Submission = require('Submission.js');

var View = React.createClass({

	saveToken: function(token){
		console.log(token)
		this.setState({
			token: token
		});
	},

	getInitialState: function() {
		return {
			token: "37LK8XDW2WhmT8-x-3br7ZxueVcJmx-xPA",
			api: "http://localhost:3000/api"
		};
	},

	render: function() {
		var page = function(){
			if (this.state.token == null){
				return <Signin api={this.state.api} onToken={this.saveToken} />
			}
			return (<div>
				<Rfp api={this.state.api} token={this.state.token}/>
			</div>)
		}.bind(this)();

		return (
			<div id="container">
				{page}
			</div>	
		);
	}

});

module.exports = View;



