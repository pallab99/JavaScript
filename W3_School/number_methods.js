let x=123;
console.log(x.toString());

console.log(x.toExponential(2));

console.log(x.toFixed(3));

let y=9.4567;
console.log(y.toPrecision(3));

let num=Number("12");
console.log(num)

let num2=Number("xxx");
console.log(num2);

// * parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("10 20 30"))

// * parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("Years 10"))
console.log(parseFloat("10.5"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);