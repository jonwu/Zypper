var React = require('react');

var RfpNav = React.createClass({

	componentDidMount: function() {
		
	},

	render: function() {
		return (
			<li className="dropdown">
			  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
	          <ul className="dropdown-menu" role="menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li className="divider"></li>
	            <li><a href="#">Separated link</a></li>
	            <li className="divider"></li>
	            <li><a href="#">One more separated link</a></li>
	          </ul>
            </li>
		);
	}

});
module.exports = RfpNav;