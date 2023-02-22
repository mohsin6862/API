fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayComment(data))



function displayComment(users){

    const CommentContainer = document.getElementById('container');

    for(const user of users){

        const usersDiv = document.createElement('div');
        usersDiv.classList.add('user');
        usersDiv.innerHTML = 
        `
        <h2>ID: ${user.id}</h2>
        <h3>Name: ${user.name}</h3>
        <h3>Email: ${user.email}</h3>
        <h3>Address: ${user.address.street}</h3>
        <h3>GEO: ${user.geo}</h3>
        
        `
        CommentContainer.appendChild(usersDiv);
    }
}