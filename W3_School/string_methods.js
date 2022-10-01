let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);

let str = "Apple, Banana, Kiwi";
let part = str.slice(0, 5);
let part1 = str.slice(5);
console.log(part);
console.log(part1);

///substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().

let x = str.substring(0, 5);
let y = str.substring(5);
console.log(x);
console.log(y);

let text = "Please visit Microsoft!";
let new_text = text.replace("Microsoft", "w3school");
console.log(new_text);

let text2 = "Please visit Microsoft and Microsoft!";
let newText = text2.replace(/Microsoft/g, "W3Schools");
console.log(newText);

let s = "hello world";
let ss = s.toUpperCase(s);
console.log(ss);

let sx = "HELLO WORLD";
let sxx = sx.toLowerCase(sx);

console.log(sxx);
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let str1 = "     hello world";
//let str2=str1.trim();
//let str2=str1.trimStart();
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let str3 = "  hello world  ";
let str2 = str3.trimEnd();
console.log(str2);

// The charAt() method returns the character at a specified index (position) in a string:
let par = "Pallab Majumdar";
//let char=par.charAt(0);
let char = par.charCodeAt(1);
console.log(char);
