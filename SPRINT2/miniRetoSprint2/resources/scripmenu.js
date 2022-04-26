function mostrar(){
    document.getElementById("menu").style.display="block";
}
function ocultar(){
    document.getElementById("menu").style.display="none";
}
function mostrar_ocualtar(){
    const caja = document.getElementById("menu");
    if(caja.style.display == "none"){
        mostrar()
    }
    else{
        ocultar();
    }
}