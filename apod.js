



let key = "432f5d21e0d2cd45a85806851125e8bc"


  let descripcionPeli = document.querySelector('#descripcionPeli')
let boton = document.querySelector('#boton')
let titulo = document.querySelector('h1')

fetch ( 'https://api.themoviedb.org/3/movie/343611&api_key=432f5d21e0d2cd45a85806851125e8bc')
 


boton.onclick = function () {
  
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => res.json())
    .then(peliculaInfo => {
      
      descripcionPeli.src = peliculaInfo.overview
      titulo.textContent = peliculaInfo.title
    })
}






