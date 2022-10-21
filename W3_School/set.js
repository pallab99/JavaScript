// ? A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.

// ! Method	    Description
// ! new Set()	Creates a new Set
// ! add()	    Adds a new element to the Set
// ! delete()	Removes an element from a Set
// ! has()	    Returns true if a value exists in the Set
// ! forEach()	Invokes a callback for each element in the Set
// ! values()	Returns an iterator with all the values in a Set
// ! size	    Returns the number of elements in a Set

let letters = new Set();
letters.add("a");
letters.add("a");
letters.add("e");
letters.add("d");
letters.add("f");

console.log(letters);

letters.delete("a");
console.log(letters);

console.log(letters.has("d"));

console.log(letters.values());

let text = "";
for (const x of letters.values()) {
  text += x;
  console.log(text);
}
console.log(text);
