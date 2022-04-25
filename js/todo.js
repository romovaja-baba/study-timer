$(function() {

	const addButton = $("#todo__addbtn");

	let todoInput = $('#todo__input');
	let todoList = $("#todo__list");

	let todoTask = $(".todo__task");
	let taskCheckbox = $(".task__checkbox");

	let taskName = $(".task__name");
	let taskDeleteBtn = $(".task__deletebtn");


	//----------------------------

	
	function hasValue() {
		if ($(todoInput).val().length < 1) {
			return false
		} else {
			return true
		};
	};

	function inputFocus() {
		$(todoInput).focus();
	};


	//-------------------------------

	$(addButton).on("click", function() {
		if (hasValue() == false) {
			alert('Please enter a task!')
		} else {
			let taskToAdd = $(
				`<div class="todo__task">
					<div class="task__name">
						${$(todoInput).val()}
					</div>
					<div class="task__deletebtn">
						<img src="img/icons/delete-button.png">
					</div>
				</div>`
			);

			$(taskToAdd).on("click", function() {
				$(this).toggleClass("checkedout")
			});

			$(taskDeleteBtn).on("click", function() {
				console.log(taskToAdd);
			})
		
			$(todoList).append(taskToAdd);
			$(todoInput).val("");
			inputFocus();

		};
	});

	// ---------------------------

	$(todoTask).on("click", function() {
		$(this).toggleClass("checkedout");
	});

	$(taskDeleteBtn).on("click", function() {
		$(todoTask).remove();
	})

	$(document).keypress(function(e){
    if (e.which == 13){
        $(addButton).click();
    };


});

});