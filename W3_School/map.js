// ! Method	    Description
// ! new Map()	Creates a new Map
// ! set()	    Sets the value for a key in a Map
// ! get()	    Gets the value for a key in a Map
// ! delete()	Removes a Map element specified by the key
// ! has()	    Returns true if a key exists in a Map
// ! forEach()	Calls a function for each key/value pair in a Map
// ! entries()	Returns an iterator with the [key, value] pairs in a Map
// ! size	    Returns the number of elements in a Map

let fruits=new Map();
fruits.set("mango",500);
fruits.set("banana",400);
fruits.set("apple",600);
fruits.set("lemon",700);

console.log(fruits.get("mango"));

console.log(fruits.size); 

console.log(fruits.delete("banana"));
console.log(fruits.has("banana"));