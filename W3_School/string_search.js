let str = "Please locate where 'locate' occurs!";
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let first_idx=str.indexOf("locate");
console.log(first_idx);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let last_idx=str.lastIndexOf("locate");
console.log(last_idx);

let pos=str.search("locate");
console.log(pos);

//The includes() method returns true if a string contains a specified value.

let contains=str.includes("locate");
console.log(contains);

//Check if a string includes "world", starting the search at position 12:

let contains_world=str.includes("world");
console.log(contains_world);

//The startsWith() method returns true if a string begins with a specified value, otherwise false:

let start_with=str.startsWith("Please");
console.log(start_with);

//The endsWith() method returns true if a string ends with a specified value, otherwise false:

let end_with=str.endsWith("occurs!");
console.log(end_with);









