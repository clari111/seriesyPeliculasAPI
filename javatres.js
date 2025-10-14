
let key = "432f5d21e0d2cd45a85806851125e8bc";
let movieId = 11631;
let boton = document.querySelector('#boton');
    let titulo = document.querySelector('#titulo');
    let descripcionPeli = document.querySelector('#descripcionPeli');
    let datosPeli = document.querySelector('#datosPeli');

    boton.onclick = function () {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=es`)
        .then(res => res.json())
        .then(peliculaInfo => {
          titulo.textContent = peliculaInfo.title;
          descripcionPeli.textContent = peliculaInfo.overview;

          datosPeli.innerHTML = `
            <h3>Información de la película</h3>
            <p> Fecha de estreno: ${peliculaInfo.release_date}</p>
            <p>Duración: ${peliculaInfo.runtime} minutos</p>
            <p>Géneros: ${peliculaInfo.genres.map(g => g.name).join(", ")}</p>
            <p> Puntaje: ${peliculaInfo.vote_average} / 10</p>
            <p> Idioma original: ${peliculaInfo.original_language.toUpperCase()}</p>
          `;
        })
        .catch(error => {
          alert("Error al cargar la información de la películass " + error);
        });
    }