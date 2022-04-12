alert("hola");


/* variable */
var nombre;
let apellido;
/* const edad */;
nombre="Daniel";
apellido="Mayo";
edad=20;
//tipos de datos
//string
var name="Juan";
//numer o tipo numero
var edad=10;
//boolean true o false
var succes=true;
//array
var array=['tomate', 'salchihca', 'cebolla'];
//objeto
var perosna={
    name:"oscar",
    edad:27,
    ciudad:"manizales",
}



//operadores logicos
/* 
suma/ concatenar= "+"
resta
*/
let suma=2+3;
/* console.log(suma); */
let resta = 5 - 3;
let multiplicacion = 2* 3;
let division = 20 / 3;
let numero = 6;
let comparacon = 8 == '8';
let comparacion2 = 8 === "8";
let diferentes = 2!="2";
let diferentes2 = 2!="5";
let concatenacion= "hola" + "mundo";

/* console.log(diferentes); */



//funciones
const sumar =()=>{
  /*   console.log(2+3) */
}


function sumar2() {
  
}

//como llamar una funcion
sumar2();






const edadUsuario = document.getElementById("edad");
let valor = 0;
edadUsuario.innerHTML=valor;


function aumentar() {
    valor = valor + 1;
    edadUsuario.innerHTML = valor;
    
}

function disminuir() {
    valor = valor - 1;
    edadUsuario.innerHTML = valor;
}

/* console.log(input) */
function getNombre()
    {
    const input =document.getElementById("nombre").value}
