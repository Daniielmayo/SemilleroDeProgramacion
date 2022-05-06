// let numeros = 100;
// var divisible = 3;
// for ( var i = 1; i <=100; i++)
// {
//     {
//         if( i % 3 ==0 )
//         document.write("Fizz");
//         console.log("fizz")
//     }
//     if( i % 5 == 0)
//     {
//         document.write("Buzz");
//         console.log("Buzz")
//     }
//     if (i%3 !=0 && i%5 != 0)    
//     {
//         document.write(i);
//         console.log(i)
//     }
//     document.write (" <br />");
// }
// function esDivisible(num, divisor)
// {
//     if (num % divisor == 0)
//     {
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }

// for ( var i = 1; i <=5; i++)
// {
//     {
//         if( i % 2 ==0 )
//         document.write(i);
//         console.log(i)
//         document.write (" <br />");

//      }
    // if( i % 5 == 0)
    // {
    //     document.write("Buzz");
    //     console.log("Buzz")
    // }
    // if (i%3 !=0 && i%5 != 0)    
    // {
    //     document.write(i);
    //     console.log(i)
    // }
    // document.write (" <br />");
//  }

// const palabra ="hola"
// const longitud = palabra.length
// let texto = "";
// for (let i = longitud; i > 0; i--) {
//     texto = texto + palabra[i -1];
    
// }
// console.log(texto)
// const numeros  = ["daniel", "daniel", "juan", "daniel", "daniel", "daniel", 5];
// let duplicados = [];
 
// const tempArray = [...numeros].sort();
 
// for (let i = 0; i < tempArray.length; i++) {
//   if (tempArray[i + 1] === tempArray[i]) {
//     duplicados.push(tempArray[i]);
//   }
// }
 
// console.log(duplicados); // [2, 4]
let duplicados=["FI29","FI09","JM15","FI29"]//devuelve true
    //["FI29","FI09","JM15","FI28"]//devuelve false
    
    let repetido = false;
    for (let i = 0; i < duplicados.length; i++) {
        for (let j = 0; j < duplicados.length; j++) {
            if (duplicados[i] == duplicados[j] && i != j) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                repetido= true;
             }
         }
     }
     console.log(repetido);