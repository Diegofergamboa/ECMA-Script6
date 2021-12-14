// devolver clave y valor de una matriz

const data = {
    frontend: 'Oscar' ,
    backend: 'Isabel',
    designer: 'Ana'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length)

const data = {
    frontend: 'Oscar' ,
    backend: 'Isabel',
    designer: 'Ana',
}

const values = Object.values(data);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(8, 'hi '))

//trading comas

const object = {
    runa: 'runa' , // Al final dejar la coma, dice que se puede agregar otro elemento sin problema.
}