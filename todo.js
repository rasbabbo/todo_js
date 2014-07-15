var line = document.getElementById('list');
var toDo = document.getElementById('todo_form');
var newList = document.getElementById('newList');



toDo.onsubmit = function(event) {
	event.preventDefault();

	var newLine = document.createElement('li');
	var newTextNode = document.createTextNode(line.value);
	newLine.appendChild(newTextNode);
	newList.appendChild(newLine);
	this.reset();




	var button = document.createElement('button')
	button.innerHTML = "x";
	newLine.appendChild(button);

	button.onclick = function(clear) {
		newList.removeChild(newLine);

		console.log("pizza")

	}






	console.log(newTextNode);
}



