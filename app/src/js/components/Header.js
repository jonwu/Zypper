var React = require('react');
	RfpNav = require('./RfpNav.js');

var Header = React.createClass({

	render: function() {
		return (
			<nav className="navbar navbar-default">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Brand</a>
    </div>

    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        
          <RfpNav />
        
      </ul>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          
        </div>
        
      </form>
      <ul className="nav navbar-nav navbar-right">
        
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
		);
	}

});

module.exports = Header;