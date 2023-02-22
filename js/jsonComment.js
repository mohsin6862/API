fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComment(data))



function displayComment(comments){

    const CommentContainer = document.getElementById('container');

    for(const comment of comments){

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = 
        `
        <h2>ID: ${comment.id}</h2>
        <h3>Name: ${comment.name}</h3>
        <h3>Email: ${comment.email}</h3>
        <h4>Description: ${comment.body}</h4> 
        `
        CommentContainer.appendChild(commentDiv);
    }
}