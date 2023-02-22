fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayComment(data))



function displayComment(posts){

    const CommentContainer = document.getElementById('container');

    for(const post of posts){

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = 
        `
        <h2>ID: ${post.id}</h2>
        <h3>Title: ${post.title}</h3>
        <h3>Body: ${post.body}</h3>
        
        `
        CommentContainer.appendChild(postDiv);
    }
}