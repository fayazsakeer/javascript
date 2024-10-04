let productsDiv = document.getElementById("products")
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
    let products = data.products
    console.log(products);
    let product = "";
    products.forEach(e => {
        product += `<div onclick="nav(${e.id})" class= "cards">
        <img src= "${e.thumbnail}">
        <h2>${e.title}</h2>
        <h4>${e.price}</h4>
        <p>${e.rating}</p>
        </div>`
    })
    productsDiv.innerHTML = product
});
function nav(id){
    location.href = `/javascript/phome.html?id=${id}`
}