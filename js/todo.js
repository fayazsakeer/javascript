let todos = []

document.getElementsByTagName("button")[0]
.addEventListener("click",() => {
    let ip = document.getElementById("todo")
    todos.push(ip.value)
    display()
})

function display(){
    let list = document.getElementById("list")
    let lis = ""
    todos.forEach((e,i) => {
        lis += `<li>${e}
        <button onclick="del(${i})">clear</button>
        <button onclick="edit(${i})">edit</button>
        </li>`
    })
    list.innerHTML=lis
}

function del(index){
    if(confirm("do you want to delete this")){
        todos = todos.filter((a,i) => i != index)
    display()
    }
}
function edit(index){
 let newtodo = prompt("enter new data", todos[index])
 todos[index] = newtodo
 display()
}