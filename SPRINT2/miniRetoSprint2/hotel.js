import { hotelsData } from "./resources/data.js";
const hotelsImage = document.getElementById("hotelsImage")
const informacionHotel = document.getElementById("informacionHotel")
//  console.log(informacionHotel)

const cardHotel = document.createElement("div");
  cardHotel.setAttribute("class","card");

    

  function contenido(e) {
      
      console.log(e.description)
   }

 hotelsData.forEach((e) => {
     const cardHotel = document.createElement("div");
     cardHotel.setAttribute("class","card");
    

     const imageHotel = document.createElement("img");
     imageHotel.setAttribute("class","card__img");
     imageHotel.setAttribute("src", e.photo);
     
     imageHotel.setAttribute("alt", "imagen del hotel " + e.name);
     imageHotel.addEventListener("click", ()=>contenido(e));

  
     hotelsImage.appendChild(cardHotel);
     cardHotel.appendChild(imageHotel);
 });




