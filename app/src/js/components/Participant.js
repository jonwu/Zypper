var React = require('react');

var Participant = React.createClass({

	handleVendors: function(event){

		if (event.keyCode === 13) {
			// When user clicks enter, create new question
			var email = event.target.value
			console.log(email)
			$.ajax({
				url: this.props.api + "/rfis/" + this.props.currentRfp.id +"/add_vendor",
				type: 'POST',
				dataType: 'json',
				data: {"email": email, "token": this.props.token},
			})
			.done(function(data) {
				console.log(data)
			})
			.fail(function() {
				console.log("fail")
			})
		}
	},
	render: function() {
		return (
			<div className="col-md-2 col-md-offset-10 col-xs-offset-9 col-xs-6 " id="participant">
				<input type="text" onKeyUp={this.handleVendors}></input>

			</div>
		);
	}

});

module.exports = Participant;