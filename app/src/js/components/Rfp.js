var React = require('react');
	Category = require('./Category');
	Question = require('./Question');
	Header = require('./Header');

var Rfp = React.createClass({
	getInitialState: function() {
		return {
			rfp: null,
			categories: [],
			questions: []
		};
	},

	
	
	setCurrentRfp: function(rfp){
		if(rfp != null){
			$.get(this.props.api + '/rfis/'+ rfp.id +'/categories', {'token': this.props.token}, function(data) {
				console.log("categories", data)
				this.setState({
					rfp: rfp,
					categories: data
				});
			}.bind(this));
		}	
	},

	setCurrentCategory: function(category){
		if(category != null){
			$.get(this.props.api + '/categories/'+ category.id +'/questions', {'token': this.props.token}, function(data) {
				console.log("questions", data)
				this.setState({
					questions: data
				});
			}.bind(this));
		}
	},
	

	
	render: function() {
		return (
			<div>
				<Header api={this.props.api} token={this.props.token} setCurrentRfp = {this.setCurrentRfp}/> 
				<div className="row">
					<Category 
						api={this.props.api} 
						token={this.props.token} 
						categories={this.state.categories} 
						setCurrentCategory = {this.setCurrentCategory}/>

					<Question api={this.props.api} token={this.props.token} questions = {this.state.questions}/>
				</div>
			</div>
		);
	}

});

module.exports = Rfp;