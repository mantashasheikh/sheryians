let nm = document.querySelector("#name")
let form = document.querySelector("form")
let hide = document.querySelector("#hide")

form.addEventListener("submit" , function(dets){
    dets.preventDefault()
    if(nm.value.length <= 2){
        hide.style.display = "initial"
    }else{
       hide.style.display = "none"
    }
    
    const regex =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    let ans = regex.test("mantasha@gmail.com")
    console.log(ans)
})
