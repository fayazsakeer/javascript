// let resp = fetch('https://dummyjson.com/products')
// resp.then(res => {
//     console.log(resp);
//     return res.json()
// })
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// })

function abcd(name) {
    let promise = new Promise((res,rej) => {
        setTimeout(() => res(`Hello ${name}`),4000)
    })
    return promise
}

let resp = abcd ("Alan")
resp.then((result) => {
    console.log(result);
})
.catch(e => {
    console.log(e);
})