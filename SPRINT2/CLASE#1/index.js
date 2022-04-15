/* alert("hola mundo");
console.log("Hola mundo"); */

//--------------------//---------------------------------------//---------------

/* tipos de datos primitivos */
const texto = "juan"; /* tipo de valor string */
const edad = 20; /* tipo de valor number */
const estudia = true; /* tipo de valor boolean o puede ser false */
const vacio = null; /* tipo de valor null (vacio)*/
const indefinido = undefined;/* tipo de valor indefinido */


 const arreglo = [texto, edad, estudia,"vida"]/* array */
//como recorrer un arreglo:
//tipo forara recorrer arreglo 
        /*     for ( i = 0; i< arreglo.length; i++) {
        console.log = (arreglo[i]);
            } */
//tipo foreach ara recorrer arreglo 
        /* arreglo.forEach(element => {
            console.log(element)
        }); */


//--------------------//---------------------------------------//---------------
        
//como ver la posicion del elemto y su valor
            /* arreglo.forEach (function(arreglo,index){
                console.log(`${index} => ${arreglo}`)
            }) */
//--------------------//---------------------------------------//---------------

//metodo map para recorrer arreglo 
        /* dias =[
            {numero:1, dia:"lunes"},
            {numero:2, dia:"martes"},
            {numero:3, dia:"miercoles"},
            {numero:4, dia:"jueves"},
            {numero:5, dia:"viernes"}
        ]

        dias.map(function (dias) {
            console.log(dias.numero+"=>"+dias.dia)
        }) */

//--------------------//---------------------------------------//---------------

//como imprimir un arreglo dentro de un arreglo
        const empleados = [["juana","maria"],["jose","steve"]]
        console.log(empleados[1][0])
        console.log(empleados[0][0])


//--------------------//---------------------------------------//---------------
//objetos
const  cliente = {
    /* van a contener objetos de tipo llave valor */
    /* cada vez que se vaya a escribir otra linea de cod se separa con una coma (,)*/
  nombre: "daniel",
  direccion:"cra5#4-32",
  ciudad:"manizales",
  factura: 1232343,
  facturaPendiente: true
  
}
//si queremos acceder  a algo en especifico como la ciudad escribios el objeo y despues del punto a lo que queremos acceder
    console.log(cliente.ciudad)
//--------------------//---------------------------------------//---------------
//como imprimir un objeto dentro de un array
const topTres= [
    {
        ranking: 1,
        nombre: "messi",
        equipo:"PSG",
        equipos:[1,2,3,4,5]

    },
    {
        ranking: 2,
        nombre: "CR7",
        equipo:"MANCHESTER U",

    },
     {
        ranking: 3,
        nombre: "NEYMAR",
        equipo:"PSG",

    }
   
]
console.log(topTres[0].equipo)
//qui se va a imprimir psg del primer objeto: en console el primer parametro es el nombre del array(topTres), la posicio en la que esta el objeto [0],si quieres 
//si quieres imprimir algun aspecto en especifico del objeot va despues de punto (.equipo)
console.log(topTres[0].equipos[3])
//qui se va a imprimir 4: en console el primer parametro es el nombre del array(topTres), la posicio en la que esta el objetos[0], si quieres 
//si quieres acceder algun arrar dentro del objeto que esta dentro de un array colocamos .nombre del array y la posicion [3]



//--------------------//---------------------------------------//---------------

/* function name(params) {
    
}
 */

/* TIPOS DE VARIABLES Y COMO DEFINIRLAS */
// las variables son espacios de mermoria para almacenar inf
var nombre = "abdul";
nombre= "Daniel";/*  reasignacion del valor de una variable */
 
let  apellido ="mayo";
apellido="Hernandez";

