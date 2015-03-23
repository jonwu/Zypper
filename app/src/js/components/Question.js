var React = require('react');
var Textarea = require('react-textarea-autosize');
var Question = React.createClass({
	
	handleKeyUp: function(e){
		e = e || event;
		if (e.keyCode === 13) {
			$.post(this.props.api + '/categories/' + this.props.currentCategory.id + "/questions", {"text": "", "token": this.props.token}, function(data, textStatus, xhr) {
				var newQuestions = this.props.questions.concat(data)
				this.props.onNewQuestion(newQuestions)
			}.bind(this));
		}
		
	},
	handleFocus: function(i){
		var question = this.props.questions[i]
		this.props.setCurrentQuestion(question)

	},

	render: function() {
		console.log(this.props.questions)
		var questions = this.props.questions.map(function(question, i){
			return (
				<li className = "list-group-item" key={i}>
					<span className = "drag glyphicon glyphicon-th" aria-hidden="true"></span>
					<Textarea onFocus={this.handleFocus.bind(this, i)} onKeyUp={this.handleKeyUp}>{question.text}</Textarea>
				</li>
			);
		}.bind(this));

		var initSortable = function(){
			$(".sortable").sortable({
				group: 'no-drop',
      			handle: 'span.glyphicon',
      			onDragStart: function (item, container, _super) {
			        // Duplicate items of the no drop area
			        if(!container.options.drop)
			          item.clone().insertAfter(item)
			        _super(item)
			    }
			});
    		
		}()

		return (
			<div className="col-md-3 col-md-offset-1 col-xs-offset-2 col-xs-6 " id="question">
				<ul className="list-group sortable">
					{questions}
				</ul>
				{initSortable}
			</div>
		);
	}

});

module.exports = Question;