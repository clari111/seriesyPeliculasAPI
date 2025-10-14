




let key = "432f5d21e0d2cd45a85806851125e8bc";
let movieId = 11631;

let botonElenco = document.querySelector('#botonElenco');
let contenedor = document.querySelector('#listaElenco');




botonElenco.onclick = function () {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=es-ES`)
    .then(res => res.json())
    .then(data => {
      let elenco = data.cast;
      contenedor.innerHTML = "";


      for (let i = 0; i < 10; i++) {
        let actor = elenco[i];
        contenedor.innerHTML += "<p>" + actor.name + " como " + actor.character + "</p>";
      }
    })
    .catch(error => {
      alert('Error al cargar el elenco: ' + error);
    });
};


let botonFotos = document.querySelector('#botonFotos');
let divFotos = document.querySelector('#fotosElenco');

botonFotos.onclick = function () {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=es-ES`)
    .then(res => res.json())
    .then(data => {
      let elenco = data.cast;
      divFotos.innerHTML = ""; 

      for (let i = 0; i < 10; i++) {
        let actor = elenco[i];
        if (actor.profile_path) {
          let urlImagen = "https://image.tmdb.org/t/p/w200" + actor.profile_path;

          divFotos.innerHTML += `
            <img class="fotoActor" src="${urlImagen}" alt="${actor.name}">
          `;
        }
      }
    })
    .catch(error => {
      alert('Error al cargar las fotos del elenco ' + error);
    });
};







 
