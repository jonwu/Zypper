var React = require('react');
	Category = require('./Category');
	Question = require('./Question');
	Header = require('./Header');

var Rfp = React.createClass({
	getInitialState: function() {
		return {
			rfp: null
		};
	},
	setCurrentRfp: function(rfp){
		this.setState({
			rfp: rfp
		});
	},
	render: function() {
		return (
			<div>
				<Header api={this.props.api} token={this.props.token} setCurrentRfp = {this.setCurrentRfp}/> 
				<div className="row">
					<Category api={this.props.api} token={this.props.token} />
					<Question api={this.props.api} token={this.props.token}/>
				</div>
			</div>
		);
	}

});

module.exports = Rfp;