//Ejercicios
const nombresArreglo = ["manuel", "samuel", "fernando", "hernado"];
//--------------------------//---------------------------------------//-----------------------------------------------------
const matriz = [
  [1, 2, 3, 4, 5, 6],
  ["samuel", "andres", "carlos", "antonio", "julian", "samara"]
];

//--------------------------//---------------------------------------//-----------------------------------------------------
const personaObjeto = {
  nombre: "felipe",
  ocupacion: "estudiante",
  edad: 20
};
//--------------------------//---------------------------------------//-----------------------------------------------------
// ARREGLOS

// Ejercicio 1
//nos indica la cantidad de parametros dentro del arreglo .length
// console.log(nombresArreglo.length);


//  Ejercicio 2
// nos imprime la posicion del arreglo que deseamos imprimir
// console.log(nombresArreglo[1]);

//Ejercicio 3
//me devuelve todos los arreglos mas el parametro que tiene y la devuelve en la ultima posicion
// const miNombre = "Joselyn";
// nombresArreglo.push(miNombre);
// console.log(nombresArreglo);

//Ejercicio 4
//me devuelve en la posicion 0 (en la primera posicion) a diferencia del punto anterior
// const nombreMascota = "Daniel";
// nombresArreglo.unshift(nombreMascota);
// console.log(nombresArreglo);

//Ejercicio 5
//DANIEL MAYO
// nombresArreglo.sort();
// console.log(nombresArreglo);
//me devuelve en orden, en este caso orden alfabetico puede ser numerico dependiente del tipo de dato

//Ejercicio 6
//
// nombresArreglo.pop();
// console.log(nombresArreglo);
// me elimina el ultimo elementeo del arreglo

//Ejercicio 7
//
// nombresArreglo.shift();
// console.log(nombresArreglo);
//elimina el primer elemento del arreglo

//Ejercicio 8
// se le pasa el parametro delete y se elimina la posicion indecado en este caso la posision 2  y le pasa un undife
// delete nombresArreglo[2];
// console.log(nombresArreglo);

//Ejercicio 9
//me crea un nuevo arreglo desde la posision que le indiquemos es decir le pasamos la posision 1 y me crea un nuevo arreglo desde la posision 1 en adelante y tambien se puede pasar numeros negativos y comienza a contar desde atras hacia adelante
// const newNombres = nombresArreglo.slice(1);
// console.log(nombresArreglo);
// console.log(newNombres);

//Ejercicio 10
//
// const newNombres2 = nombresArreglo.slice(1, 3);
// console.log(nombresArreglo);
// console.log(newNombres2);
//es casi igual que el arreglo anterios crea un nuevo arreglo aquie le estamos indicamos devuelvame desde la posision 1 y antes de que llegue la posision 3 mas no si imprime la posision 3

//Ejercicio 11
//
// nombresArreglo.splice(2, 3, "alejandro", "enrique");
// console.log(nombresArreglo);
//modifica el arreglo original  adicionando elementos a partir de la posision que le indiquemos

//Ejercicio 12
//
// console.log(nombresArreglo.join(" - "));
// coge los parametros del arreglo y los vuelve en strig separandolos por aquello que pongamos en las comillas

//Ejercicio 13
//me devuelve true o false dependiendo  si encontro o no resultado
// console.log(nombresArreglo.includes("emiliano"));

//Ejercicio 14
//nos entrega los elementos  en string separados por comas
// console.log(nombresArreglo.toString());

//Ejercicio 15
//esta es la forma en la que se llama un array dentro de una matriz bidimensional es decir dentro de este arreglo hay
// otro arreglo y su primer valor es la posicion del array que queremos imprimir y su segundo valor es la posicion de un elemento del array que queremos acceder
// console.log(matriz[1][2]);

//Ejercicio 16
//me crea 8 arreglos y me los guarda como indefinidos en memoria
// const newArreglo = new Array(8);
// console.log(newArreglo);
// console.log(newArreglo.length);





//--------------------------//---------------------------------------//-----------------------------------------------------
//OBJETOS

//Ejercicio 17
//lo que hace es llamar el objeto es decir llamanos el objeto y despues del punto le pasamos el elemnto que queremos que imprimir
// console.log(personaObjeto.nombre);
// console.log(personaObjeto.edad);

//Ejercicio 18
//imprime un arreglo con los nobres de las propidades de los nombres mas no los valores de decir los que esta depues del igual
// console.log(Object.keys(personaObjeto));

//Ejercicio 19
//me devuelve los valores del objeto  es decir todo aquello que esta despues del igual
// console.log(Object.values(personaObjeto));

//Ejercicio 20
//lo que me trae el valor de la propiedad indicado del objeto
// console.log(personaObjeto["nombre"]);

//Ejercicio 21
//crea un arreglo con cada llave valor es decir combierte un objeto en array pero los separa con cada llave valor
// console.log(Object.entries(personaObjeto));

//Ejercicio 22
//lo que me va crear un nuevo objeto  y lo dejo vacio y despues le paso un atributo y le doy un valor en consola
// const fruta = new Object();
// console.log(fruta);
// fruta.color = "rojo";
// console.log(fruta);


//--------------------------//---------------------------------------//-----------------------------------------------------
//STOP!!!

//COMO RECORRER UN ARREGLO
// Las funciones callback son funciones que están en otra función como argumento.
//funciones callback para arrays

// for (let i = 0; i < nombresArreglo.length; i++) {
//   const element = nombresArreglo[i];
//   console.log(element);
// }


//le podemos indicar la posicion del elemnto en la que queremos acceder 
matriz[0].map((elemento) => {
  console.log(matriz[1][4] );
});

//
// const parrafo = document.getElementById("parrafo");
// const elemento = nombresArreglo.map((e) => e);
// parrafo.innerHTML = elemento;

//FUNCION CONSTRUCTORA CON OBJETOS
function persona(nombre) {
  this.nombre = nombre;
}
const newPersona = new persona("Andrea");
console.log(newPersona);
