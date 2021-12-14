
function newFunction(name, age, country) {
    var name = name || 'oscar' ;
    var name = age || 25 ;
    var name = country || 'country' ;
    console.log(name, age, country);
}

// es6 

function newFunction2(name = 'scar' , age = 32 , country="MX") {
    console.log(name, age, country)
}
newFunction2();
newFunction2('diego', 1, 'colombia');

// template literal

let hello = 'hello';
let world = 'world';

let epicPhrase = `${hello} ${world} hola como vas`;
console.log(epicPhrase);

//multilinea en los strings

let lorem = "lorem ipsum qui consequatur commodi ipsum vel duis PRIMERA FRASE \n"
+ "frase de OTRA LINEA";
console.log(lorem);


let lorem2 = `PRIMERA LINEA
SEGUNDA LINEA`;
console.log(lorem2);

// destructuring 

let person = {
    'name' : 'diego',
    'age': 25 ,
    'country' : 'colombia'
}
// console.log(person.name);
// console.log(person.age);
// console.log(person.country);

let {name, age, country} = person
console.log(name);

//operador de propagación

let team1 = ['oscar', 'diego', 'ricardo'];
let team2 = ['valeria', 'pedro', 'camilo'];

let education = ['David', ... team1, ... team2];
console.log(education);

//asignaciones 
{
    var global = 'globalvar' ;
}
{
    let globallet = 'global let' ;
    console.log(globallet);
}

console.log(global);

// Las constantes no se pueden reasignar
const a = 'b';
