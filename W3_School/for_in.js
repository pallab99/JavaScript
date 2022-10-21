const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

let array = [10, 20, 30, 40];
for (let it in array) {
  console.log(array[it]);
}
