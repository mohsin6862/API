
fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=> res.json())
.then(data => displayPhotos(data))


function displayPhotos(photos){

    const photosContainer = document.getElementById('container');

    for(const photo of photos){
        const photosDiv = document.createElement('div');

        photosDiv.classList.add('photos');
        photosDiv.innerHTML = 
        `
        <h2>ID: ${photo.id}</h2>
        <h3>Title: ${photo.title}</h3>
        <h4>URL: ${photo.url}</h4>
        <h5>Thambnail URL: ${photo.thumbnailUrl}</h5>
        `

        photosContainer.appendChild(photosDiv);
    }

}