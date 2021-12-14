// ES 11

//dinamic import
//, hacer importación de forma dinámica para poder llamar piezas de 
// codigo para optimizar el proyecto

const button = document.getElementById('btn');

button.addEventListener('click' , async function () {
    const module = await import("./file.js");
    module.hello();
});

// big Int, numero enteros el máximo que es de 2 a la 52

const aBigNumber = 9007199254740991n;

const anotheraBigNumber = bigInt(9007199254740991);

console.log(aBigNumber, anotheraBigNumber);

// Devolver una promesa después de que todas las promesas se hayan cumplido o rechazado

const Promise1 = new Promise ((resolve, reject) => reject ('reject'));
const Promise2 = new Promise ((resolve, reject) => resolve ('resolve'));
const Promise3 = new Promise ((resolve, reject) => resolve ('resolve1'));


// Esperará hasta que todas estén resuelta y envía de una 

Promise.allSettled([Promise1, Promise2, Promise3 ])
    .then(response => console.log(response))


// global this tiene sle valor global de this que es similar al objeto global
// window, cell

// Acceder de manera estándar al valor global y a las aplicaciones creadas con node
// Agregar los globales en this
// Versatil para la web y los servidores.

console.log(window);
console.log(globalThis)

// Trabajar con operadores nulos.
// nuevo operador logico si el valor es nulo dle primer elemento colocamos las opciones

const fooo = null ?? 'default string';
console.log(fooo);

// optional chaining

const user = {};

console.log(user?.profile?.email); // No rompas la ejecución si no está el valor.

// Da un output de undefined.

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail')
}

