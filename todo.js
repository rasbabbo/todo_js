var newInput = document.getElementById('newInput');
var form = document.getElementById('todo_form');
var newList = document.getElementById('newList');



form.onsubmit = function(event) {
	event.preventDefault();

	var newLine = document.createElement('li');
	var newTextNode = document.createTextNode(newInput.value);
	newLine.appendChild(newTextNode);
	newList.appendChild(newLine);
	this.reset();




	var button = document.createElement('button')
	button.innerHTML = "x";
	newLine.appendChild(button);

	button.onclick = function(clear) {
		newList.removeChild(newLine);
		localStorage.removeItem(newLine);

		console.log("pizza");

	}



	localStorage.setItem(newLine, newTextNode);


	console.log(newTextNode);
	console.log(JSON.parse(localStorage));
}



