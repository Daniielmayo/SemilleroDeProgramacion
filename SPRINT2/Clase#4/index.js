/* setTimeout(() => {
  console.log("Mundo");
}, 10);

console.log("Hola");

const miFuncion = () => {
  console.log("Para Daniel");
};

setTimeout(() => {
  miFuncion();
}, 0); 

//setTimeout es una funcion asincrona las funciones asincronas se salen de la pila de ejecucion se prepara, se ejecutan las otras funciones o tareas de js y despues se ejecuta las funciones asincronas

*/



//A continuacion veremos promesas
function request (index) {
    return fetch ("https://pokeapi.co/api/v2/pokemon/" + index)
    
}

async function elegirPokemon (index){
    const response   = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);/* index me ayuda para que cuando queira llamar un pokemon no tenga que copiar codigo muchas veces si no que cuando llame la funcion solo le asigne los parametros */
    const data = await response.json(); /* en esta inea de codigo nos traemos los datos del pokemon */
     console.log(data.name) /* aqui estamos diciendo que nos imprima en consola el objeto data y el anidamos el nombre para que solo nos imprima el nombre del pokemon */
    
}

/* elegirPokemon(17);
elegirPokemon(1);
elegirPokemon(25); */


/* primero se ejecutan los console.log y despues se ejecuta la funcion ya que son funciones asincronas y estan quedan en espera en la pila de ejecucion */
/* elegirPokemon(17);
console.log("p1")
elegirPokemon(1);       
console.log("p2")
elegirPokemon(25);
console.log("p3"); */  



/* 
A CONTINUACION veremos que se imprimer 
1). primero los console.log por que no son asincrionos
2).luego las promesas async & await
3). Y por ultimo las funciones asincromas setTimeout, primero se imprimen desde el menor milisegun al mayor 
este es el orden en el que se va a imprimir
*/
setTimeout (() =>{
  elegirPokemon(1);  
}, 0);

console.log("p1");

setTimeout (() =>{
  elegirPokemon(4);  
}, 10);

console.log("p2");

elegirPokemon(25);

console.log("p3");