var React = require('react');
var Textarea = require('react-textarea-autosize');

var Component = React.createClass({

	render: function() {
		return (
			<div className = "component">
				<div className= "header">
					
					
				</div>
				<div className ="content">
					<Textarea 
					className="textarea"
					value=""
					placeholder="Vendor's Response Goes Here">
					</Textarea>
				</div>
			</div>
		);
	}

});

module.exports = Component;