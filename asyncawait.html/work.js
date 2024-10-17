let productsDiv = document.getElementById("products")
async function getItem() {
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json();

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
};
getItem()
function nav(id) {
    location.href = `./phome.html?id=${id}`
}