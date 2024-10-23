let repair = []



class Garage{
    brand;
    model;
    problem;
    owner;
    constructor(brand,model,problem,owner){
        this.brand=brand;
        this.model=model;
        this.problem=problem;
        this.owner=owner
    }

}

// document.getElementById("button")
// .addEventListener("click",()=>{
//     let ip = document.getElementsByClassName("data")
//     repair.push(ip.value)
//     listDetails()
// })
document.getElementById("frm")
.addEventListener("submit",e=>{
    e.preventDefault()
    // repair.push(e.)
    // listDetails()
    console.log(e.target);
    const data = new FormData(e.target)
    console.log(data.get('data'));
    
    
})

function listDetails(){
    let list = document.getElementById("list")
    let lis = ""
    repair.forEach((e,i)=>{
        lis += `<li>${e}</li>`
    })
    list.innerHTML=lis
}