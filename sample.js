
//ARRAY



// let a = [1,2,3,4]
// console.log(a)
// console.log(a[2]);
// // let b = a
// let b = [...a]  
// a[1]="g"
// console.log(b);
// // let[x, y,z] = b
// let [x,...y] = b
// console.log(b);
// console.log(y);


//OBJECT


// let x = {
//     name: "Abi",
//     age: 9,
//     place: "Aroor"

// }
// console.table(x);
// x.gender="M"
// console.log(x["name"]);
// console.log(x);

// // let y = x
// let y = {...x}
// x.name="abu"
// console.log(y);

// // let {name,age,place}=x
// let {name,...rest}=x
// console.log(rest);
 
// let person = {}

// person.name = prompt("Enter your Name");
// person.age = Number(prompt("Enter your age"));
// person.place = prompt("Enter your Place")

// console.log("A guy named " + person.name + " with age " +  person.age  + " is coming from " + person.place +" at 4 pm ");

let Price = Number(prompt("Actual Price"));
let Discount = Number(prompt("Percentage Discount"));

console.log("Final Pice is Rs:" + (Price-((Discount / 100)*Price)));
