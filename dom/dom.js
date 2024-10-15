// let d =document.getElementById("boxid")

// d.innerHTML = "<h3>hi<h3>"
// d.style.color = "yellow"
// d.style.backgroundColor="Gray"
// d.style.border = "3px solid yellow"

// console.log(d.textContent);

let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click",abcd)

function abcd(e) {
    e.target.style.backgroundColor = "blue"
    console.log("function invoked");
    let ip = document.getElementsByTagName("input")[0]
    console.log(ip.value);

}