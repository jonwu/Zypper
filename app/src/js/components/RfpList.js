var React = require('react');

var RfpList = React.createClass({

	componentDidMount: function() {
		console.log(this.props.api)
		$.get(this.props.api+'/rfis', {'token': this.props.token}, function(data) {
			this.setState({
				rfis: data
			});
		}.bind(this));
	},

	getInitialState: function() {
		return {
			rfis: [], 
			title: null
		};
	},

	selectRfp: function(i){
		var rfp = this.state.rfis[i]
		this.props.setCurrentRfp(rfp)

		this.setState({
			title: rfp.title
		});
	},

	render: function() {
		var rfis = this.state.rfis.map(function(rfi, i){
			return (
				<li key={rfi.id}>
					<a onClick={this.selectRfp.bind(this, i)}>{rfi.title}</a>
				</li>
  			);	
		}.bind(this));  

		var title = this.state.title ? this.state.title : 'No RFI Selected';
		return (
			<li className="dropdown col-md-12">
			  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{title}<span className="caret"></span></a>
	          <ul className="dropdown-menu" role="menu">
	            {rfis} 
	          </ul>
            </li>
		);
	}

});
module.exports = RfpList;