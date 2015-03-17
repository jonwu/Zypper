var React = require('react');
	RfpList = require('./RfpList.js');

var Header = React.createClass({
	
	render: function() {

		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
				    <div className="navbar-header col-md-1">
				      <a className="navbar-brand" href="#">Brand</a>
				    </div>

				    
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				          <RfpList api={this.props.api} token={this.props.token} setCurrentRfp={this.props.setCurrentRfp}/>
				      </ul>
			    	</div>
			  </div>
			</nav>
		);
	}

});

module.exports = Header;