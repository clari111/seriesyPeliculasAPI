
let peliculaElegida = document.getElementById ('selector').value


fetch(" https://api.themoviedb.org/3/query=${encodeURIComponent(selector)}&api_key=432f5d21e0d2cd45a85806851125e8bc")

.then(res => res.json())
.then(datos => {
   






























fetch("https://api.themoviedb.org/3/tv/126390?api_key=432f5d21e0d2cd45a85806851125e8bc")
  .then(res => res.json())

  