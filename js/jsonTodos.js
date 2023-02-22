fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => displayComment(data))



function displayComment(todos){

    const CommentContainer = document.getElementById('container');

    for(const todo of todos){

        const toDosDiv = document.createElement('div');
        toDosDiv.classList.add('post');
        toDosDiv.innerHTML = 
        `
        <h2>ID: ${todo.id}</h2>
        <h3>Title: ${todo.title}</h3>
        <h3>Completed: ${todo.completed}</h3>
        
        `
        CommentContainer.appendChild(toDosDiv);
    }
}