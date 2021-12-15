//Vamos a poder hacer todos los cambios según la necesidad de la aplicación

const string = 'JavaScript es maravilloso, JS JS JS con JS puedo crear el futuro de la Web';
const replaceString2 = string.replaceAll("JS" , "JavaScript");
console.log(replaceString2);
const replaceString = string.replace("maravilloso" , "Increíble");

//Métodos privados dentro de las clases.

// class Message {
//     #show(val) {  // Para volver privado el método.
//         console.log(val);
//     }
//     get #add(var) {
//         console.log(var); // Manejar una excelente estructura
//     }
// }

// const message = new Message();

// message.show('buenas');


const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// Lo que busca es primero intentar colocar el primero que termine de resolverse.


// wift ref le permite dar referencia sin ser recogido por el garbage colector

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element) //Evitar que sea recogido por la basura este elemento.
    }
}

// Operadores lógicos.

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);


let isTrue = true;
let isFalse = false;

console.log(isTrue ||= isFalse)

let isTrue = undefined;
let isFalse = false;

console.log(isTrue ??= isFalse)

// es.Next (la proxima versión de jS) (tc39 desarrolladores de aprobar las propuestas y de calificar)

// ! STAGES
// ! IDEA > PROPOSAL > DRAFT > CANDIDATE > READY

