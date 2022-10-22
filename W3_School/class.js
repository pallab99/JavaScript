class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let obj = new Car("ford", 2004);
console.log(obj);
console.log("my car is " + obj.age() + " years old");
