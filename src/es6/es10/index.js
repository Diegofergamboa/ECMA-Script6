// Para ver nivel

let array = [1,2,2,[3,3,4,5],[6,1]];

console.log(array.flat(3)) // Niveles de arreglo.

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value *2]));

// Eliminar los espacio en blanco de un string

let hello = '           hello world';
console.log(hello);

console.log(hello.trimStart());

// Pasar el parámetro de error

try {

} catch { // No pasar el valor del erro y trabajar más fácil con el try y catch
    error
}

// Transformar a objeto con "clave valor" en un objeto.

let entries = [['name' , 'oscar'] , ['age' , 32] , ['country' , 'MX']];

console.log(Object.fromEntries(entries));

// Acceder a una descripciçon


let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);// objeto de tipo simbolo

