let pagina = 1;
const btnAtras = document.getElementById("btnAtras");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () =>{
    if(pagina < 1000){
        pagina = pagina + 1;
        cargarPeliculas();
    }
  
});

btnAtras.addEventListener("click",()=>{
    if(pagina >1 ){
        pagina -= 1;
        cargarPeliculas();
    }
})

//--------------------------------//-----------------------------------//----

const cargarPeliculas =async ()=>{
    //try nos sirve para que me intente ejecutar el codigo y se presente error  lo atrapamos con catch no va permitir capturar el error
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=61e4275d79de5a445bb667bfb69db564&language=es-MX&page=${pagina}`);
        
        // console.log(respuesta);
        if (respuesta.status ===  200) {
            const data = await respuesta.json();
            let peliculas = "";
            data.results.forEach(pelicula => {

                peliculas = peliculas + `                 
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
                        <h3 class="titulo"> ${pelicula.title}</h3>
                     </div>`

              
            });
    
            document.getElementById("contenedor").innerHTML = peliculas;


     
        console.log("A  continuacion veremos el top 5 de las mejores pelicula mas populares de este mes: ")
    
        data.results.forEach(peliculas => {
         
            console.log( peliculas.title); 
        });
        
        }else if (respuesta.status === 401){
            console.log("La llave esta mal ejecutada")
        }
        else if (respuesta.status === 404){
            console.log("La pelicula no esta disponible en este momento")
        }
      
    }catch(error){
        console.log(error);
    }

}
cargarPeliculas();