
let x = [ "car","bike","boat"]

let list = document.getElementsByClassName("list")[0]

let li = ""

x.forEach(e => {
    li = li + `<li>${e}</li>`
})
console.log(li);

list.innerHTML = li


