
let key = "432f5d21e0d2cd45a85806851125e8bc";

let descripcionPeli = document.querySelector('#descripcionPeli');
let boton = document.querySelector('#boton');
let titulo = document.querySelector('#titulo'); 




let movieId = 11631 ;

boton.onclick = function () {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=es`)
    .then(res => res.json())
    .then(peliculaInfo => {
      // Mostramos la info en la página
      descripcionPeli.textContent = peliculaInfo.overview;
      titulo.textContent = peliculaInfo.title;
    })
    .catch(error => {
      alert('Error al obtener los datos de la película:', error);
    });
}









