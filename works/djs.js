let usersDiv = document.getElementById("users")
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
    let users = data.users
    console.log(users);
    let person  = ""
    users.forEach( e => {
        person += `<div onclick="nav(${e.id})" class= "cards">
        <img src= "${e.image}">
        <h2>${e.firstName}</h2>
        </div>`
    })
    usersDiv.innerHTML = person
});
function nav(id){
    location.href = `./nextpage.html?id=${id}`
}