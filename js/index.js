fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(data => displayAlbum(data))

function displayAlbum(albums){

    const albumContainer = document.getElementById('container');
    for (const album of albums){
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML =
        `
        <h3>ID: ${album.id}</h3>
        <h3>ID: ${album.title}</h3>
        
        `;

        albumContainer.appendChild(albumDiv);

    }
}