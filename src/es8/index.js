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
    designer: 'Ana'
}

const values = Object.values(data);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(8, 'hi '))
