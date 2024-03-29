var React = require('react');
var Textarea = require('react-textarea-autosize');
var Question = React.createClass({

	handleOnKeyUp: function(i){

		var self = this;
		var question = event.target.value
		var doneTypingInterval = 2000;  //time in ms, 5 second for example
		var end = $('#question .list-group-item').filter('.q-active').index()
		
		if (event.keyCode === 13) {
			// When user clicks enter, create new question
			$.post(this.props.api + '/categories/' + this.props.currentCategory.id + "/questions/insert", {"text": "", "end": end+2, "token": this.props.token}, function(data, textStatus, xhr) {
				var newQuestions = this.props.questions
				newQuestions.splice(end+1, 0, data);
				this.props.onNewQuestion(newQuestions)
				this.resetCounter();
			}.bind(this));
		}else{
			//Save text when user finish typing
			handleNewQuestion()
			clearTimeout(this.typingTimer);
			if(question) {
    			this.typingTimer = setTimeout(handleTimer, doneTypingInterval);
    		}
		}
		function handleTimer(){
			self.handleQuestionChange(question, i)
		}
		function handleNewQuestion(){
			var newQuestions = self.props.questions;
			newQuestions[i].text = question
			self.props.onNewQuestion(newQuestions)
		}
	},

	handleQuestionChange: function(question, i){
		$.ajax({
				url: this.props.api + "/questions/" + this.props.questions[i].id,
				type: 'PUT',
				dataType: 'json',
				data: {"text": question, "token": this.props.token},
			})
			.done(function(data) {
				console.log(data)
			})
			.fail(function() {
				console.log("fail")
			})
			
	},
	handleBlur: function(i){
		// Save text when user clicks out
		clearTimeout(this.typingTimer);
		var question = event.target.value
		this.handleQuestionChange(question, i)
	},
	handleFocus: function(i){
		console.log("focus", i)
		var question = this.props.questions[i]
		this.props.setCurrentQuestion(question)
	},
	resetCounter: function(){
		// Reset index in O(n) time. FYI Could be optimized.  
		$(".q-index").each(function(index) {
            nextIndex = index + 1; 
            $(this).html(nextIndex)
        })
	},
	componentDidMount: function() {
		var initSortable = function(){
			var start = 0
			var end = 0
			$(".sortable").sortable({
				group: 'no-drop',
	  			handle: 'span.glyphicon',
	  			onDragStart: function (item, container, _super) {
	  				start = item.index() + 1
		        // Duplicate items of the no drop area
		        if(!container.options.drop)
		          item.clone().insertAfter(item)
		        _super(item)
		    	},
		    	onDrop: function(item, container, _super) {
		    		end = item.index() + 1
		    		this.resetCounter();
		    		$.post(this.props.api + '/categories/' + this.props.currentCategory.id + "/questions/reorder", {"start": start, "end": end, "token": this.props.token});

		    		item.removeClass("dragged").removeAttr("style")
						$("body").removeClass("dragging")
		    	}.bind(this)

			});
    		
		}.bind(this)()

	},

	render: function() {

		var questions = this.props.questions.map(function(question, i){
			var isActive = this.props.currentQuestion == question ? "list-group-item q-active" : "list-group-item";
			return (
				<li className = {isActive} key={question.id}>
					<div className ="side">
						<span className = "q-index">{i+1}</span>
						<span className = "drag glyphicon glyphicon-th" aria-hidden="true"></span>
					</div>
					<Textarea 
						onFocus={this.handleFocus.bind(this, i)} 
						onBlur={this.handleBlur.bind(this,i)}
						onKeyUp={this.handleOnKeyUp.bind(this, i)}
						defaultValue={question.text}>
					</Textarea>
				</li>
			);
		}.bind(this));

		

		return (
			<div className="col-md-3 col-md-offset-1 col-xs-offset-2 col-xs-6 " id="question">
				<ul className="list-group sortable">
					{questions}
					
				</ul>
			</div>
		);
	}

});

module.exports = Question;