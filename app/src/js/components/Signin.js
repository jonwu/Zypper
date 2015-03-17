var React = require('react');

var Signin = React.createClass({
	
	login: function(){
		var email = React.findDOMNode(this.refs.email).value
		var password = React.findDOMNode(this.refs.password).value

		$.post(this.props.api + '/sessions', {"email": email, "password": password}, function(data, textStatus, xhr) {
			var user = data['user']
			var token = user["auth_token"]
			this.props.onToken(token)
		}.bind(this));
	},
	
	render: function() {
		return (
			<div className="row">
				<div className="form-signin col-md-offset-4 col-md-4 col-xs-8 col-xs-offset-2">
					<h2 className="form-signin-heading">Please sign in</h2>
					<label for="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus ref="email"> </input>
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required ref="password"> </input>
					<div className="checkbox">
					  <label>
					  <input type="checkbox" value="remember-me"> Remember me </input>
					  </label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
				</div>
			</div>	
		);
	}

});

module.exports = Signin;