const obj2 = {
    name: 'Diego' ,
    age: 32 ,
    country: 'Colombia' ,
};

let {... all} = obj;
console.log(all);

const obj = {
    name: 'Diego' ,
    age: 25
};

const obj1 = {
    ...obj ,
    country: 'Colombia'
}

console.log(obj1)

// Promise finale, para saber cuando ha termiando el llamado o ejecutar una linea de codigo según sea el caso.

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Test error'))
    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);