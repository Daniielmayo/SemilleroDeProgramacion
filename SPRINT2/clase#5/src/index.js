import { hotelsData } from "./resources/data";

const sectionHotels = document.getElementById("main__hotels");

// ----- renderizado de imagen 1 x 1 (ejemplo) -----
// const cardHotel = document.createElement("div");
// cardHotel.setAttribute("class", "card");

// const titleHotel = document.createElement("h3");
// titleHotel.setAttribute("class", "card__title");
// titleHotel.textContent = hotelsData[0].name;

// const imageHotel = document.createElement("img");
// imageHotel.setAttribute("class", "card__image");
// imageHotel.setAttribute("src", hotelsData[0].photo);
// imageHotel.setAttribute("alt", "imagen del hotel" + hotelsData[0].name);

// sectionHotels.appendChild(cardHotel);
// cardHotel.appendChild(titleHotel);
// cardHotel.appendChild(imageHotel);

//-------- subtema: filtrado de elementos
// function filtrarHoteles(nombrePais) {
//   return hotelsData.filter((element) => {
//     if (element.country == nombrePais) {
//       return element;
//     }
//   });
// }

//renderizado en masa con forEach()

// console.log(hotelsData);

 hotelsData.forEach((element) => {
   const cardHotel = document.createElement("div");
   cardHotel.setAttribute("class", "card");

   const titleHotel = document.createElement("h3");
   titleHotel.setAttribute("class", "card__title");
   titleHotel.textContent = element.name;

   const imageHotel = document.createElement("img");
   imageHotel.setAttribute("class", "card__image");
   imageHotel.setAttribute("src", element.photo);
   imageHotel.setAttribute("alt", "imagen del hotel " + element.name);

   sectionHotels.appendChild(cardHotel);
   cardHotel.appendChild(titleHotel);
   cardHotel.appendChild(imageHotel);
 });
