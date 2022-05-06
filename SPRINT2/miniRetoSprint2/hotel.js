import { hotelsData } from "./resources/data.js";
const hotelsImage = document.getElementById("hotelsImage")
const informacionHotel = document.getElementById("informacionHotel")
//  console.log(informacionHotel)

const cardHotel = document.createElement("div");
  cardHotel.setAttribute("class","card");

    

  function contenido(e) {
    informacionHotel.innerHTML= "";
      const encabezadoHotel = document.createElement("div")
      encabezadoHotel.setAttribute("class", "informacion--encabezadoHotel")
      const titleHotel = document.createElement("h1")
      titleHotel.setAttribute("class","informacionHotel--title")
      titleHotel.textContent= e.name;
     
      const country = document.createElement("h4")
      country.setAttribute("class","informacion--country")
      country.innerHTML= "PAIS: " + e.country;

     

      const descriptionHotels = document.createElement("section");
      descriptionHotels.setAttribute("class","informacionHotel--description");

      const hotelImage = document.createElement("img");
      hotelImage.setAttribute("class","informacionHotel--img");
      hotelImage.setAttribute("src", e.photo);

      const city = document.createElement("p");
      city.setAttribute("class","descripcion--city");
      city.innerHTML = e.city ;

      const informacionDescription = document.createElement("p");
      informacionDescription.setAttribute("class","descripcion--informacion");
      informacionDescription.innerHTML = e.description ;

      const rooms = document.createElement("p")
      rooms.setAttribute("class","descriptionHotels--rooms")
      rooms.innerHTML = "Este hotel cuenta con " + e.rooms + " Habitaciones de alta calidad"


      informacionHotel.appendChild(encabezadoHotel);
      encabezadoHotel.appendChild(titleHotel);
      encabezadoHotel.appendChild(country);
      descriptionHotels.appendChild(hotelImage);

      informacionHotel.appendChild(descriptionHotels);
      descriptionHotels.appendChild(city)
      descriptionHotels.appendChild(informacionDescription);
      descriptionHotels.appendChild(rooms);
     



   }

 hotelsData.forEach((e) => {
     const cardHotel = document.createElement("div");
     cardHotel.setAttribute("class","card");
    

     const imageHotel = document.createElement("img");
     imageHotel.setAttribute("class","card__img");
     imageHotel.setAttribute("src",  e.photo);
     imageHotel.setAttribute("alt", "imagen del hotel " + e.name);

     imageHotel.addEventListener("click", ()=>contenido(e));

  
     hotelsImage.appendChild(cardHotel);
     cardHotel.appendChild(imageHotel);
 });




