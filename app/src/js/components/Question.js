var React = require('react');
var Textarea = require('react-textarea-autosize');
var Question = React.createClass({

	handleOnKeyUp: function(i){

		var self = this;
		var question = event.target.value
		var doneTypingInterval = 2000;  //time in ms, 5 second for example

		// When user clicks enter, create new question
		if (event.keyCode === 13) {
			$.post(this.props.api + '/categories/' + this.props.currentCategory.id + "/questions", {"text": "", "token": this.props.token}, function(data, textStatus, xhr) {
				var newQuestions = this.props.questions.concat(data)
				this.props.onNewQuestion(newQuestions)
			}.bind(this));
		}else{
			var newQuestions = this.props.questions;
			newQuestions[i].text = question
			this.props.onNewQuestion(newQuestions)

			clearTimeout(this.typingTimer);
			if(question) {
    			this.typingTimer = setTimeout(handleTimer, doneTypingInterval);
    		}
		}
		function handleTimer(){
			self.handleQuestionChange(question, i)
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
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	},
	handleBlur: function(i){
		clearTimeout(this.typingTimer);
		var question = event.target.value
		this.handleQuestionChange(question, i)
	},
	handleFocus: function(i){
		var question = this.props.questions[i]
		this.props.setCurrentQuestion(question)
	},

	render: function() {

		var questions = this.props.questions.map(function(question, i){
			return (
				<li className = "list-group-item" key={question.id}>
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
		    		console.log(start)
		    		console.log(end)
		    		
		    		// Reset index in O(n) time. FYI Could be optimized.  
		    		$(".q-index").each(function(index) {
			            nextIndex = index + 1; 
			            $(this).html(nextIndex)
			        })
			        
		    		$.post(this.props.api + '/categories/' + this.props.currentCategory.id + "/questions/reorder", {"start": start, "end": end, "token": this.props.token});

		    		item.removeClass("dragged").removeAttr("style")
						$("body").removeClass("dragging")
		    	}.bind(this)

			});
    		
		}.bind(this)()

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