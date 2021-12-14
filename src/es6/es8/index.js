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



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('hello World') ,7000)
        : reject(new Error('Test error'));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();


