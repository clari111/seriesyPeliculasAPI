



let key = "432f5d21e0d2cd45a85806851125e8bc";
let movieId = 11631;


let descripcionPeli = document.querySelector('#descripcionPeli');
let boton = document.querySelector('#boton');
let titulo = document.querySelector('#titulo');


boton.onclick = function () {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=es`)
    .then(res => res.json())
    .then(peliculaInfo => {
      descripcionPeli.textContent = peliculaInfo.overview;
      titulo.textContent = peliculaInfo.title;
    })
    .catch(error => {
      alert('Error al obtener los datos de la película', error);
    });
}

