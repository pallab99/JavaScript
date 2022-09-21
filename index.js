//Variables
let first_name='Pallab';
let last_name='Majumdar'
let myage=22
console.log('My first name is',first_name);
console.log('My last name is',last_name);
console.log('My age is',myage);

//constant
const n=10;
console.log(n);

//Objects

let person={
    name:'Pallab',
    age:23
};
//dot notation to access a objects property
console.log(person.name)
console.log(person.age)

//bracket notation to access a objects property
person['name']='majumdar';
console.log(person['name']);

//Arrays
let colors=['blue','red','green'];
console.log(colors);
console.log(colors[1]);
console.log(colors[0][2]);
//Array length
let array_size=colors.length;
console.log(array_size);

console.log(colors[0].length);

console.log(colors[2][2].length);

//Fuction
function add(a,b)
{
    return a+b;
}
let x=add(4,5);
console.log(x);

