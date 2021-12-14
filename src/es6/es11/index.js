// ES 11

//dinamic import
//, hacer importación de forma dinámica para poder llamar piezas de 
// codigo para optimizar el proyecto

const button = document.getElementById('btn');

button.addEventListener('click' , async function () {
    const module = await import("./file.js");
    module.hello();
});