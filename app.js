function addTask() {

	var todoList = document.getElementById('todo-list');
	var listItem = document.createElement('li');
	listItem.className = window.prompt('Importance Level :', '1: High Priority, 5: Low Priority');

	if (listItem.className > 5) {

		window.alert('Please enter a value between 1 and 5');

	} else {

		switch(listItem.className){

			case '1':
			listItem.className = 'very-important';
			break;

			case '2':
			listItem.className = 'important';
			break;

			case '3':
			listItem.className = 'middle-important';
			break;

			case '4':
			listItem.className = 'light-important';
			break;

			case '5':
			listItem.className = 'low-important';
			break;

			default:
			listItem.className = 'undefined';
			break;

		}

		listItem.textContent = window.prompt('Please write a task you want to do');	

		todoList.appendChild(listItem);

	}

}