let peliculaElegida = document.getElementById('selector').value;

fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(peliculaElegida)}&api_key=432f5d21e0d2cd45a85806851125e8bc`)
  .then(res => res.json())
  .then(datos => {
    let resultados = datos.results;
    if (resultados.length > 0) {
      let id = resultados[0].id;
      
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=432f5d21e0d2cd45a85806851125e8bc`);
    } else {
      alert("No se encontró la película");

    }
  })
  .then(res => res.json())
  .then(pelicula => {
    console.log("Título:", pelicula.title);
    console.log("Descripción:", pelicula.overview);
    console.log("Fecha de estreno:", pelicula.release_date);
  })

