

// let x = "hari is a good boy"

// let char = x.split(" ").filter(cb => cb.length>2)
// .join(" ")

//  console.log(char);


// let v = ["a","e","i","o","u"];

// let x = "An Apple a day keeps the doctor away"

// let res = x.split(" ").filter(cb => !v.includes(cb[0].toLowerCase())).join(" ")

// console.log(res);


let v = ["a","e","i","o","u"];

let x = "an apple a day keeps the doctor away"

let res = x.split(" ").filter(cb => !(cb.split("").filter(cb => v.includes(cb)).length>1)).join(" ")

console.log(res);