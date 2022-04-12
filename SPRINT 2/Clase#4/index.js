setTimeout(() => {
    console.log("Mundo");
}, 10);

console.log("Hola");

const miFuncion = () => {
    console.log("Para Daniel");
};

setTimeout(() => {
    miFuncion();
}, 0);
