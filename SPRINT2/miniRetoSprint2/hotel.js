import { hotelsData } from "./resources/data.js";
const hotelsImage = document.getElementById("hotelsImage");
// console.log(hotelsData)
console.log(hotelsImage)
const cardHotel = document.createElement("div");
  cardHotel.setAttribute("class","card");

    

 hotelsData.forEach((e) => {
     const cardHotel = document.createElement("div");
     cardHotel.setAttribute("class","card");
    
     console.log(cardHotel);

     const imageHotel = document.createElement("img");
     imageHotel.setAttribute("class","card__img");
     imageHotel.setAttribute("src", e.photo);
     console.log(e.photo);
     imageHotel.setAttribute("alt", "imagen del hotel " + e.name);

     hotelsImage.appendChild(cardHotel);
     cardHotel.appendChild(imageHotel);
 });