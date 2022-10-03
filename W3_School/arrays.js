let cars=["tata","toyota","feat"];
console.log(cars);

console.log(cars[0]);
cars[0]="Audi";
console.log(cars);

let len=cars.length;
console.log(len);

cars.sort();
console.log(cars);

let flen=cars.length;
for(let i=0; i<flen; i++)
console.log(cars[i][0]);

cars.push("rolls royce");

console.log(cars);

