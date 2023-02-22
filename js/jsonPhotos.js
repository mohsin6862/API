
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
        <h2>ID: ${photo.id}</h3>
        <h3>ID: ${photo.title}</h3>
        <h4>ID: ${photo.url}</h3>
        <h6>ID: ${photo.thumbnailUrl}</h3>
        `

        photosContainer.appendChild(photosDiv);
    }

}