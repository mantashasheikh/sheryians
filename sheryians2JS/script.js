let btn = document.getElementById("btn")
function sayHello(){
    alert("hello , Mantasha")
}
btn.addEventListener("click" , sayHello)



let Btn = document.getElementById("Btn")
let removebtn = document.getElementById("removebtn")
let para = document.getElementById("para")
function hello(){
    para.style.color = "blue"
    para.style.backgroundColor = "pink"
    
}
Btn.addEventListener("click" , hello)
removebtn.addEventListener("click" , function(){
    Btn.removeEventListener("click" , hello)
    para.style.display =  "none"
})