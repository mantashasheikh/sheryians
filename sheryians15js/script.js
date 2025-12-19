let count = 0
let progress = document.querySelector(".progress-bar")
let progressPercent = document.querySelector("#progressPercent")

let intv = setInterval(function(){
    if(count <= 99){
        count++
        progress.style.width = `${count}%`
        progressPercent.textContent = `${count}%`
    }
    else{
        document.querySelector("h2").textContent = "Downloaded"
        clearInterval(intv)
    }
},60)
