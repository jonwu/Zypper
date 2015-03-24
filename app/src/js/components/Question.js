var React = require('react');
var Textarea = require('react-textarea-autosize');
var Question = React.createClass({

	uuid: function () {
    var i, random;
    var uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
	},
	
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
				<li className = "list-group-item" key={this.uuid()}>
					<span className = "drag glyphicon glyphicon-th" aria-hidden="true"></span>
					<Textarea onFocus={this.handleFocus.bind(this, i)} onKeyUp={this.handleKeyUp}>{question.text}</Textarea>
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